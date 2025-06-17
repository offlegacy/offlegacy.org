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
      <Image
        className="m-auto my-10 size-28"
        src="/offlegacy.svg"
        alt="offlegacy logo"
        width={112}
        height={112}
        priority
      />
      <Section className="flex flex-col items-start justify-center space-y-6 p-6">
        <h1 className="font-bold text-6xl">OffLegacy</h1>
        <p className="text-4xl font-semibold">
          We help developers make and maintain products sustainably — with better tools.
        </p>
      </Section>
      <div className="flex flex-col space-y-16 mb-10">
        <Section>
          <p className="text-zinc-400 p-6">
            We believe that technology should be designed not just to function, but to last. At OffLegacy, we tackle
            real problems we face during development and openly share sustainable solutions through open source.
          </p>
        </Section>
        <Section>
          <h2 className="font-semibold text-3xl p-6 border-b border-zinc-800">Our Mission</h2>
          <div className="p-6 space-y-4">
            <h3 className="font-semibold text-2xl">Building Sustainable Tools.</h3>
            <p className="text-zinc-400 ">
              While software frameworks have rapidly advanced, development tools still present many inconveniences. By
              excellently solving the complexities and repetitive issues encountered in the development process, we are
              building a sustainable ecosystem.
            </p>
          </div>
          <div className="p-6 space-y-4">
            <h3 className="font-semibold text-2xl">Fostering an Open Source Culture.</h3>
            <p className="text-zinc-400 ">
              We are a team that started in South Korea 🇰🇷. Although the open source culture has not yet fully taken
              root in Korea, we are striving to change that. By proactively developing libraries and fostering a healthy
              open source culture, we aim to enable world-class open source projects to thrive in Korea as well.
            </p>
          </div>
        </Section>
        <Section>
          <h2 className="font-semibold text-3xl p-6">Open Source Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
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
          <h2 className="font-semibold text-3xl p-6 border-b border-zinc-800">Latest News</h2>
          <div className="flex flex-col">
            {getNews().map((news) => (
              <NewsLine key={news.id} variant="info" title={news.title} date={news.date} href={news.href} />
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="font-semibold text-3xl p-6 border-b border-zinc-800">Meet the Team</h2>
          <p className="text-zinc-400 p-6">
            We're developers who find joy in coding and are passionate about contributing to the open-source ecosystem.
          </p>
          <div className="flex flex-wrap outline outline-zinc-800">
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
        <Section className="outline bg-zinc-900 outline-zinc-800 space-y-8">
          <div className="space-y-4 px-8 py-6">
            <div className="flex gap-4 flex-col-reverse items-center justify-between text-center md:flex-row md:text-left">
              <h2 className="font-semibold text-3xl">Join the OffLegacy Community</h2>
              <TeamBadge className="mt-2" />
            </div>
            <p className="text-zinc-400 md:pr-10">
              OffLegacy is a space for open-source collaboration. Share your story, contribute your ideas, and grow with
              us.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap outline outline-zinc-800 px-8">
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
      </div>
      <Footer />
    </Screen>
  )
}
