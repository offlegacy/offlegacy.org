import Link from 'next/link'

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
      <div className="flex gap-10 justify-between items-center py-2 px-4 bg-zinc-900 border border-zinc-800 transition-colors rounded-lg">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div>{renderStatus}</div>
      </div>
    )
  }

  return (
    <Link
      href={href}
      className="flex gap-10 justify-between items-center py-2 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
      <div>{renderStatus}</div>
    </Link>
  )
}
