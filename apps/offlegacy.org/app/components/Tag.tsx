import { cn } from '../utils/style'

interface Props {
  variant: 'blue' | 'yellow' | 'green' | 'red'
  children: React.ReactNode
}

export default function Tag({ variant, children }: Props) {
  return (
    <div
      className={cn('bg-zinc-800 text-zinc-200 font-medium py-0.5 rounded text-xs text-center px-2', {
        'bg-blue-800 shadow-blue-800/50 shadow-md': variant === 'blue',
        'bg-yellow-800 shadow-yellow-800/50 shadow-md': variant === 'yellow',
        'bg-green-800 shadow-green-800/50 shadow-md': variant === 'green',
        'bg-red-800 shadow-red-800/50 shadow-md': variant === 'red',
      })}
    >
      {children}
    </div>
  )
}
