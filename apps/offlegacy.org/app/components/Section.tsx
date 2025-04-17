import { cn } from '../utils/style'

export default function Section({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <section className={cn('space-y-4', className)}>{children}</section>
}
