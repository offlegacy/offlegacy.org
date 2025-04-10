import Image from 'next/image'
import PageLayout from './components/page-layout'
import clsx from 'clsx'
import Link from 'next/link'
import { GrGithub } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Home() {
  return (
    <PageLayout>
      <Section>
        <Image className="m-auto" src="/offlegacy.svg" alt="offlegacy logo" width={152} height={152} priority />
        <h1 className="font-bold text-4xl">OffLegacy</h1>
        <div className="text-zinc-400">
          <p>Open-source Development Team in South Korea 🇰🇷 </p>
          <p>
            We design technology not just to work, but to last — focusing on solving pain points we face during
            development, and sharing those solutions openly.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Our Mission</h2>
        <p className="text-zinc-400">
          It's about creating a sustainable technology ecosystem. Even when developing a single solution, the focus is
          on designing it to be sustainable. The goal is to open source solutions that address pain points or
          inconveniences encountered during development, or that solve issues in environments or with technologies that
          are not yet standardized or widely adopted. Ultimately, the aim is to grow these into global open-source
          libraries and expand the influence of Korean open source on the global stage.
        </p>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Open Source Projects</h2>
        <div className="space-y-4">
          <ProjectCard
            href="https://github.com/offlegacy/event-tracker"
            title="Event Tracker"
            description="Comprehensive solution for event tracking in React applications."
          />
          <ProjectCard
            href="https://github.com/offlegacy/git-intent"
            title="Git Intent"
            disabled
            description="Git workflow tool for intentional commits."
          />
          <ProjectCard
            href="https://github.com/offlegacy/vscode-yarn-catalog-lens"
            title="VSCode Yarn Catalog Lens"
            disabled
            description="VSCode extension for Yarn Catalog."
          />
          <ProjectCard
            href="https://github.com/offlegacy/flags"
            title="Flags"
            disabled
            description="A lightweight and flexible feature flag system for React applications."
          />
        </div>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Meet the Developers</h2>
        <p className="text-zinc-400">
          We find joy in development and are passionate about contributing to and advancing the open-source ecosystem.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Profile name="Gwansik Kim" github="gwansikk" />
          <Profile name="Juhyeok Kang" github="kangju2000" />
          <Profile name="Taehwan Hwang" github="stakbucks" />
        </div>
      </Section>
      <Section className="border rounded-lg p-8 bg-zinc-900 border-zinc-800 ">
        <h2 className="font-semibold text-3xl">Join the OffLegacy Community</h2>
        <p className="text-gray-500">Join us to build an open source community, share stories, and grow together.</p>
        <div className="flex flex-wrap gap-4">
          <button type="button" className="bg-zinc-800 text-white p-2 rounded-lg">
            <Link href="">
              <FaDiscord size={24} />
            </Link>
          </button>
          <button type="button" className="bg-zinc-800 text-white p-2 rounded-lg">
            <Link href="https://github.com/offlegacy">
              <GrGithub size={24} />
            </Link>
          </button>
          <button type="button" className="bg-zinc-800 text-white p-2 rounded-lg">
            <Link href="mailto:contact@offlegacy.org">
              <MdEmail size={24} />
            </Link>
          </button>
        </div>
      </Section>
      <div className="flex justify-center items-center">
        <p className="text-zinc-400">&copy; 2025 OffLegacy</p>
      </div>
    </PageLayout>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  href: string
  disabled?: boolean
}

function ProjectCard({ title, description, href, disabled }: ProjectCardProps) {
  return (
    <Link
      href={disabled ? '#' : href}
      className="flex gap-10 justify-between items-center py-2 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
      <div>
        {disabled ? (
          <div className="bg-yellow-800 text-zinc-200 font-medium py-1 rounded-lg text-xs text-center px-2">
            DEVELOPMENT
          </div>
        ) : (
          <div className="bg-blue-800 text-zinc-200 font-medium py-1 rounded-lg text-xs text-center px-2">NEW</div>
        )}
      </div>
    </Link>
  )
}

function Section({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <section className={clsx('space-y-4', className)}>{children}</section>
}

interface ProfileProps {
  name: string
  github: string
}

function Profile({ name, github }: ProfileProps) {
  return (
    <Link
      className="flex flex-col items-center gap-2 text-sm"
      href={`https://github.com/${github}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        width={80}
        height={80}
        className="size-20 rounded-full"
        src={`https://github.com/${github}.png`}
        alt={`${name}'s avatar`}
        title={`sponsor by ${name}`}
        priority
      />
      <p className="text-zinc-400">{name}</p>
    </Link>
  )
}
