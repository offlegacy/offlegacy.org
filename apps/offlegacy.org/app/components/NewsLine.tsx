import Link from 'next/link'
import { cn } from '../utils/style'

const VARIANTS = {
  info: 'bg-sky-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
} as const

interface Props {
  variant: keyof typeof VARIANTS
  title: string
  date: Date
  href: string
}

export default function NewsLine({ variant, title, date, href }: Props) {
  return (
    <Link
      href={href}
      className="flex gap-4 items-center hover:bg-zinc-900 transition-colors rounded-lg p-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={cn('size-2 rounded-full', VARIANTS[variant])} />
      <div className="flex md:items-center md:flex-row flex-col-reverse text-zinc-400">
        <span className="md:after:content-['-'] after:mx-2 md:text-zinc-400 text-zinc-600">
          {date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <span>{title}</span>
      </div>
    </Link>
  )
}
