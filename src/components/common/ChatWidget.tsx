import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, MessageCircle, Plus, SendHorizontal, X } from 'lucide-react'
import { api, type AssistantAnswer } from '@/services/api'
import { useCartStore } from '@/store/useCartStore'
import { useCatalogStore } from '@/store/useCatalogStore'
import { Markdown } from '@/lib/markdown'
import type { Product } from '@/data/products'

/**
 * Website chat assistant. Answers come from the API's deterministic engine (catalog, branches, articles);
 * there is no LLM. The conversation lives in sessionStorage so it survives page changes, not visits.
 */
type Message = { from: 'user'; text: string } | { from: 'bot'; answer: Omit<AssistantAnswer, 'success'> }

const STORE_KEY = 'ej_chat'
const WHATSAPP = 'https://wa.me/233596709226'
const GREETING: Message = {
  from: 'bot',
  answer: {
    reply: 'Hello! I can help you find products, suggest what to use for sick animals, and answer questions about prices, delivery and our branches.',
    products: [], links: [], context: { productId: null }, matched: true,
    suggestions: ['My birds have blood in their droppings', 'Do you deliver outside Accra?', 'Where is your nearest branch?', 'How can I pay?'],
  },
}

function load(): { open: boolean; messages: Message[] } {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORE_KEY) || 'null')
    if (saved?.messages?.length) return saved
  } catch { /* private mode / blocked storage: start fresh */ }
  return { open: false, messages: [GREETING] }
}

export function ChatWidget() {
  const [state, setState] = useState(load)
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const [added, setAdded] = useState<string | null>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const addItem = useCartStore((s) => s.addItem)
  const catalog = useCatalogStore((s) => s.products)
  const { open, messages } = state

  useEffect(() => {
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(state)) } catch { /* ignore */ }
  }, [state])

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
    if (open) input.current?.focus({ preventScroll: true })
  }, [messages, busy, open])

  const setOpen = (o: boolean) => setState((s) => ({ ...s, open: o }))

  const ask = async (text: string) => {
    const q = text.trim()
    if (!q || busy) return
    setDraft('')
    // Follow-ups like "how much is it?" refer to the product the bot showed last.
    const last = [...messages].reverse().find((m) => m.from === 'bot') as Extract<Message, { from: 'bot' }> | undefined
    setState((s) => ({ ...s, messages: [...s.messages, { from: 'user', text: q }] }))
    setBusy(true)
    try {
      const { success: _ok, ...answer } = await api.assistant.ask(q, last?.answer.context.productId)
      setState((s) => ({ ...s, messages: [...s.messages, { from: 'bot', answer }] }))
    } catch {
      setState((s) => ({
        ...s,
        messages: [...s.messages, {
          from: 'bot',
          answer: {
            reply: 'Sorry, I could not connect just now. Please try again, or message us on WhatsApp.',
            products: [], links: [{ label: 'Chat on WhatsApp', href: WHATSAPP }], suggestions: [], context: { productId: null }, matched: false,
          },
        }],
      }))
    } finally {
      setBusy(false)
    }
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    ask(draft)
  }

  const addToCart = (card: AssistantAnswer['products'][number]) => {
    const product: Product = catalog.find((p) => p.id === card.id) ?? { ...card, categorySlug: '', description: '' }
    addItem(product, 1)
    setAdded(card.id)
    setTimeout(() => setAdded((id) => (id === card.id ? null : id)), 1400)
  }

  // On phones the panel covers the page, so following a link closes it.
  const closeOnMobile = () => window.innerWidth < 640 && setOpen(false)
  const lastIndex = messages.length - 1

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open chat assistant"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 rounded-full bg-[#14532D] pl-4 pr-5 py-3.5 text-white shadow-lg shadow-[#14532D]/25 hover:bg-[#166534] transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-bold">Ask us</span>
        </button>
      )}

      {open && (
        <section
          aria-label="Chat assistant"
          className="fixed z-40 inset-x-2 bottom-2 top-16 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[min(600px,calc(100vh-7rem))] flex flex-col rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] shadow-2xl shadow-[#14532D]/20 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <header className="flex items-center gap-3 bg-[#14532D] px-4 py-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <MessageCircle className="h-4.5 w-4.5" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-display text-sm font-extrabold leading-tight">ERNEJOYSON Assistant</p>
              <p className="text-[11px] text-white/70">Instant answers from our catalogue</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-1.5 hover:bg-white/15">
              <X className="h-5 w-5" />
            </button>
          </header>

          <div ref={scroller} className="flex-1 overflow-y-auto px-3 py-4 space-y-3" aria-live="polite">
            {messages.map((m, i) =>
              m.from === 'user' ? (
                <div key={i} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-md bg-[#166534] px-3.5 py-2 text-sm text-white whitespace-pre-wrap break-words">{m.text}</p>
                </div>
              ) : (
                <div key={i} className="space-y-2">
                  {m.answer.reply && (
                    <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-white border border-[#EAE6DC] px-3.5 py-2.5 text-sm text-[#14532D] space-y-1.5 [&_p]:leading-relaxed [&_strong]:font-bold">
                      {m.answer.reply.split('\n').map((line, j) => <Markdown key={j} source={line} />)}
                    </div>
                  )}

                  {m.answer.products.length > 0 && (
                    <ul className="space-y-1.5 max-w-[92%]">
                      {m.answer.products.map((p) => (
                        <li key={p.id} className="flex items-center gap-2.5 rounded-xl bg-white border border-[#EAE6DC] p-2">
                          <Link to={`/shop/${p.id}`} onClick={closeOnMobile} className="shrink-0">
                            {p.image
                              ? <img src={p.image} alt="" loading="lazy" className="h-12 w-12 rounded-lg object-cover bg-[#F1EFE8]" />
                              : <span className="block h-12 w-12 rounded-lg bg-[#F1EFE8]" />}
                          </Link>
                          <div className="flex-1 min-w-0">
                            <Link to={`/shop/${p.id}`} onClick={closeOnMobile} className="block truncate text-[13px] font-bold text-[#14532D] hover:underline">{p.name}</Link>
                            <p className="text-xs text-[#14532D]/70">
                              <span className="font-semibold text-[#166534]">{p.priceDisplay}</span>
                              {' · '}
                              <span className={p.inStock ? '' : 'text-[#9A3412]'}>{p.inStock ? 'In stock' : 'Out of stock'}</span>
                            </p>
                          </div>
                          {p.inStock && (
                            <button
                              type="button"
                              onClick={() => addToCart(p)}
                              aria-label={`Add ${p.name} to cart`}
                              className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#DCFCE7] text-[#14532D] hover:bg-[#BBF7D0] transition-colors"
                            >
                              {added === p.id ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {m.answer.links.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 max-w-[92%]">
                      {m.answer.links.map((l) => {
                        const cls = 'inline-flex items-center gap-1 rounded-full border border-[#166534]/30 bg-white px-3 py-1 text-xs font-semibold text-[#166534] hover:bg-[#DCFCE7] transition-colors'
                        return /^https?:/.test(l.href)
                          ? <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>{l.label}<ArrowUpRight className="h-3 w-3" /></a>
                          : <Link key={l.href} to={l.href} onClick={closeOnMobile} className={cls}>{l.label}<ArrowUpRight className="h-3 w-3" /></Link>
                      })}
                    </div>
                  )}

                  {i === lastIndex && !busy && m.answer.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {m.answer.suggestions.map((s) => (
                        <button key={s} type="button" onClick={() => ask(s)}
                          className="rounded-full bg-[#EAE6DC]/70 px-3 py-1 text-xs font-medium text-[#14532D] hover:bg-[#DCFCE7] transition-colors">
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}
            {busy && (
              <div className="inline-flex gap-1 rounded-2xl rounded-bl-md bg-white border border-[#EAE6DC] px-3.5 py-3" aria-label="Typing">
                {[0, 150, 300].map((d) => <span key={d} className="h-1.5 w-1.5 rounded-full bg-[#166534]/50 animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
              </div>
            )}
          </div>

          <form onSubmit={submit} className="border-t border-[#EAE6DC] bg-white p-2.5">
            <div className="flex items-center gap-2">
              <input
                ref={input}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                maxLength={500}
                placeholder="Ask about a product, symptom or delivery…"
                aria-label="Your question"
                className="flex-1 min-w-0 rounded-full bg-[#FAF9F5] border border-[#EAE6DC] px-4 py-2.5 text-base sm:text-sm text-[#14532D] placeholder:text-[#14532D]/40 focus:outline-none focus:border-[#166534]"
              />
              <button type="submit" disabled={!draft.trim() || busy} aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14532D] text-white disabled:opacity-40 hover:bg-[#166534] transition-colors">
                <SendHorizontal className="h-4.5 w-4.5" />
              </button>
            </div>
            <p className="mt-1.5 text-center text-[10px] text-[#14532D]/50">
              Automatic answers. For sick animals, <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline">talk to our vet</a>.
            </p>
          </form>
        </section>
      )}
    </>
  )
}
