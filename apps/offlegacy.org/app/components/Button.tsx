import { cn } from '../utils/style'

interface Props extends React.ComponentProps<'button'> {}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={cn(
        'bg-zinc-800 text-white p-2 rounded-lg hover:bg-zinc-700 transition-colors cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
