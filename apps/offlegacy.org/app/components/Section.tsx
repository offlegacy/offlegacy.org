import clsx from 'clsx'

export default function Section({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <section className={clsx('space-y-4', className)}>{children}</section>
}
