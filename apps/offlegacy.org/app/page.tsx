import Image from 'next/image'
import Screen from './components/Screen'
import Link from 'next/link'
import { GrGithub } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import Tag from './components/Tag'
import ProjectCard from './components/ProjectCard'
import ProfileCard from './components/ProfileCard'
import Section from './components/Section'
import Button from './components/Button'
import Footer from './components/Footer'
import NewsLine from './components/NewsLine'
import DiscordButton from './components/DiscordButton'
import TeamBadge from './components/TeamBadge'
import { getMembers, getNews, getProjects } from './data-access-layer'

export default function Home() {
  return (
    <Screen>
      <Section>
        <Image className="mb-10 size-28" src="/offlegacy.svg" alt="offlegacy logo" width={112} height={112} priority />
        <h1 className="font-bold text-5xl">OffLegacy</h1>
        <div className="text-zinc-400">
          <p>Open-source Development Team in South Korea 🇰🇷</p>
          <p>
            We believe that technology should be designed not just to function, but to last. At OffLegacy, we tackle
            real problems we face during development and openly share sustainable solutions through open source.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Our Mission</h2>
        <p className="text-zinc-400">
          We're building a sustainable technology ecosystem. Even when developing a single tool, we focus on designing
          it with long-term usability in mind.
        </p>
        <p className="text-zinc-400">
          Our goal is to open-source solutions that address real pain points—especially the kinds of challenges
          developers face every day. Ultimately, we aim to grow these tools into global open-source libraries and expand
          the influence of Korean open source on the international stage.
        </p>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Open Source Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getProjects().map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              href={project.url}
              renderStatus={<Tag variant={project.badgeColor}>{project.status}</Tag>}
              disabled={project.disabled}
            />
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Latest News</h2>
        <div className="flex flex-col gap-2">
          {getNews().map((news) => (
            <NewsLine key={news.id} variant="info" title={news.title} date={news.date} href={news.href} />
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Meet the Team</h2>
        <p className="text-zinc-400">
          We're developers who find joy in coding and are passionate about contributing to the open-source ecosystem.
        </p>
        <div className="flex flex-wrap gap-6 pt-4">
          {getMembers().map((member) => (
            <ProfileCard
              key={member.id}
              firstName={member.firstName}
              lastName={member.lastName}
              github={member.github}
            />
          ))}
        </div>
      </Section>
      <Section className="border rounded-lg px-8 py-6 bg-zinc-900 border-zinc-800 space-y-8">
        <div className="space-y-4">
          <div className="flex gap-4 flex-col-reverse items-center justify-between text-center md:flex-row md:text-left">
            <h2 className="font-semibold text-3xl">Join the OffLegacy Community</h2>
            <TeamBadge />
          </div>
          <p className="text-zinc-400 md:pr-10">
            OffLegacy is a space for open-source collaboration. Share your story, contribute your ideas, and grow with
            us.
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <DiscordButton />
          <Button>
            <Link href="https://github.com/offlegacy" target="_blank" rel="noopener noreferrer">
              <GrGithub size={24} />
            </Link>
          </Button>
          <Button>
            <Link href="mailto:contact@offlegacy.org" target="_blank" rel="noopener noreferrer">
              <MdEmail size={24} />
            </Link>
          </Button>
        </div>
      </Section>
      <Footer />
    </Screen>
  )
}
