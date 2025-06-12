import Link from 'next/link'
import { cn } from '../utils/style'

const styles = {
  card: 'flex flex-col items-center bg-zinc-900 transition-colors gap-2 h-[160px] text-left outline outline-zinc-800 p-6',
  disabled: 'bg-[#0A0A0A]',
  hover: 'hover:bg-zinc-800',
  title: 'font-semibold pb-4',
  description: 'text-sm text-zinc-400 w-full text-left',
  status: 'flex gap-6 justify-between items-start w-full',
  disabledStatus: 'text-zinc-400',
} as const

interface ProjectCardProps {
  title: string
  description: string
  href: string
  renderStatus?: React.ReactNode
  disabled?: boolean
}

export default function ProjectCard({ title, description, href, disabled, renderStatus }: ProjectCardProps) {
  if (disabled) {
    return (
      <div className={cn(styles.card, styles.disabled)}>
        <div className={styles.status}>
          <h3 className={styles.title}>{title}</h3>
          {renderStatus && <div>{renderStatus}</div>}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    )
  }

  return (
    <Link href={href} className={cn(styles.card, styles.hover)} target="_blank" rel="noopener noreferrer">
      <div className={styles.status}>
        <h3 className={styles.title}>{title}</h3>
        {renderStatus && <div>{renderStatus}</div>}
      </div>
      <p className={styles.description}>{description}</p>
    </Link>
  )
}
