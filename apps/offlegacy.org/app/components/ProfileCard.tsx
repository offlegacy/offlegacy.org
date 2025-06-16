import Image from 'next/image'
import Link from 'next/link'

interface ProfileProps {
  firstName: string
  lastName: string
  github: string
}

export default function ProfileCard({ firstName, lastName, github }: ProfileProps) {
  return (
    <Link
      className="flex flex-col items-center gap-2 text-xs outline outline-zinc-800 py-6 px-8 hover:bg-zinc-900 transition-colors bg-[#0A0A0A]"
      href={`https://github.com/${github}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        width={80}
        height={80}
        className="size-18 rounded-full"
        src={`https://github.com/${github}.png`}
        alt={`${github}'s avatar`}
        title={`sponsor by ${github}`}
        priority
      />
      <div className="flex flex-col justify-center items-center">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <p className="text-zinc-400">@{github}</p>
    </Link>
  )
}
