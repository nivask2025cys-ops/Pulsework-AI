import { forwardRef } from 'react'

export function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const variants = {
    primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700',
    secondary: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
    subtle: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  }

  return (
    <Component
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export const Card = forwardRef(function Card({ className = '', ...props }, ref) {
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
      {...props}
    />
  )
})

export function CardHeader({ className = '', ...props }) {
  return <div className={`p-6 pb-3 ${className}`} {...props} />
}

export function CardContent({ className = '', ...props }) {
  return <div className={`p-6 pt-3 ${className}`} {...props} />
}

export function Label({ className = '', ...props }) {
  return (
    <label
      className={`mb-2 block text-sm font-medium text-slate-700 ${className}`}
      {...props}
    />
  )
}

export const Input = forwardRef(function Input(
  { className = '', ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={`h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 ${className}`}
      {...props}
    />
  )
})

export function Checkbox({ className = '', ...props }) {
  return (
    <input
      type="checkbox"
      className={`size-4 rounded border border-slate-300 accent-indigo-600 focus:ring-indigo-500 ${className}`}
      {...props}
    />
  )
}

Input.displayName = 'Input'
Card.displayName = 'Card'
