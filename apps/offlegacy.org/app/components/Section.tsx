import { cn } from '../utils/style'

export default function Section({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <section className={cn('outline outline-zinc-800 bg-[#0A0A0A]', className)}>{children}</section>
}
