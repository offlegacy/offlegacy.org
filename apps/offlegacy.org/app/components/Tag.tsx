import { cn } from '../utils/style'

const styles = {
  blue: 'bg-blue-800 shadow-blue-800/50',
  yellow: 'bg-yellow-800 shadow-yellow-800/50',
  green: 'bg-green-800 shadow-green-800/50',
  red: 'bg-red-800 shadow-red-800/50',
} as const

interface Props {
  variant: keyof typeof styles
  children: React.ReactNode
}

export default function Tag({ variant, children }: Props) {
  return (
    <div
      className={cn(
        'bg-zinc-800 text-zinc-200 font-medium py-0.5 rounded text-xs text-center px-2 shadow-md',
        styles[variant]
      )}
    >
      {children}
    </div>
  )
}
