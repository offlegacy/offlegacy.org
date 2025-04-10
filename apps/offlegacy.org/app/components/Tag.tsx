import { cn } from '../utils/style'

interface Props {
  variant: 'blue' | 'yellow' | 'green' | 'red'
  children: React.ReactNode
}

export default function Tag({ variant, children }: Props) {
  return (
    <div
      className={cn('bg-zinc-800 text-zinc-200 font-medium py-1 rounded-lg text-xs text-center px-2', {
        'bg-blue-800': variant === 'blue',
        'bg-yellow-800': variant === 'yellow',
        'bg-green-800': variant === 'green',
        'bg-red-800': variant === 'red',
      })}
    >
      {children}
    </div>
  )
}
