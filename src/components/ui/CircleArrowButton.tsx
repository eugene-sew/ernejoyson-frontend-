import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CircleArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'lime' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

export function CircleArrowButton({
  className,
  variant = 'dark',
  size = 'md',
  ...props
}: CircleArrowButtonProps) {
  const variants = {
    dark: 'bg-[#0A2B1D] text-white hover:bg-[#154631] shadow-sm',
    lime: 'bg-[#8BD333] text-[#0A2B1D] hover:bg-[#9BE139] shadow-sm',
    outline: 'border border-[#0A2B1D]/20 text-[#0A2B1D] hover:bg-[#0A2B1D]/5 bg-transparent',
    white: 'bg-white text-[#0A2B1D] hover:bg-[#F4F0E6] shadow-sm',
  }

  const sizes = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  }

  return (
    <button
      type="button"
      className={cn(
        'group inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <ArrowUpRight className={cn('transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5', iconSizes[size])} />
    </button>
  )
}
