import Link from 'next/link'
import { cn } from '../utils/style'

interface ProjectCardProps {
  title: string
  description: string
  href: string
  renderStatus?: React.ReactNode
  disabled?: boolean
}

const styles = {
  card: 'flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 transition-colors rounded-lg gap-2 h-[100px] text-left',
  disabled: 'opacity-70',
  hover: 'hover:bg-zinc-800',
  title: 'font-semibold',
  description: 'text-sm text-zinc-400 w-full text-left',
  status: 'flex gap-6 justify-between items-center w-full',
} as const

export default function ProjectCard({ title, description, href, disabled, renderStatus }: ProjectCardProps) {
  if (disabled) {
    return (
      <div className={cn(styles.card, styles.disabled)}>
        <div className={styles.status}>
          <h3 className={styles.title}>{title}</h3>
          <div>{renderStatus}</div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    )
  }

  return (
    <Link href={href} className={cn(styles.card, styles.hover)} target="_blank" rel="noopener noreferrer">
      <div className={styles.status}>
        <h3 className={styles.title}>{title}</h3>
        <div>{renderStatus}</div>
      </div>
      <p className={styles.description}>{description}</p>
    </Link>
  )
}
