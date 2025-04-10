import Image from 'next/image'
import Screen from './components/Screen'
import Link from 'next/link'
import { GrGithub } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import Tag from './components/Tag'
import ProjectCard from './components/ProjectCard'
import Profile from './components/Profile'
import Section from './components/Section'
import { FaDiscord } from 'react-icons/fa'
import Button from './components/Button'
import Footer from './components/Footer'

const IS_FLAGS_DISCORD = false

export default function Home() {
  return (
    <Screen>
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
            renderStatus={<Tag variant="blue">NEW</Tag>}
          />
          <ProjectCard
            href="https://github.com/offlegacy/git-intent"
            title="Git Intent"
            description="Git workflow tool for intentional commits."
            renderStatus={<Tag variant="yellow">ALPHA</Tag>}
            disabled
          />
          <ProjectCard
            href="https://github.com/offlegacy/vscode-yarn-catalog-lens"
            title="VSCode Yarn Catalog Lens"
            description="VSCode extension for Yarn Catalog."
            renderStatus={<Tag variant="yellow">ALPHA</Tag>}
            disabled
          />
          <ProjectCard
            href="https://github.com/offlegacy/flags"
            title="Flags"
            description="A lightweight and flexible feature flag system for React applications."
            renderStatus={<Tag variant="yellow">ALPHA</Tag>}
            disabled
          />
          <ProjectCard
            href="https://github.com/offlegacy/react-start"
            title="React Start"
            description="React execution pipeline."
            renderStatus={<Tag variant="yellow">ALPHA</Tag>}
            disabled
          />
        </div>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Meet the Developers</h2>
        <p className="text-zinc-400">
          We find joy in development and are passionate about contributing to and advancing the open-source ecosystem.
        </p>
        <div className="flex flex-wrap gap-6 pt-4">
          <Profile firstName="Gwansik" lastName="Kim" github="gwansikk" />
          <Profile firstName="Juhyeok" lastName="Kang" github="kangju2000" />
          <Profile firstName="Taehwan" lastName="Hwang" github="stakbucks" />
        </div>
      </Section>
      <Section className="border rounded-lg p-8 bg-zinc-900 border-zinc-800 ">
        <h2 className="font-semibold text-3xl">Join the OffLegacy Community</h2>
        <p className="text-gray-500">Join us to build an open source community, share stories, and grow together.</p>
        <div className="space-x-2">
          {IS_FLAGS_DISCORD && (
            <Button>
              <Link href="">
                <FaDiscord size={24} />
              </Link>
            </Button>
          )}
          <Button>
            <Link href="https://github.com/offlegacy">
              <GrGithub size={24} />
            </Link>
          </Button>
          <Button>
            <Link href="mailto:contact@offlegacy.org">
              <MdEmail size={24} />
            </Link>
          </Button>
        </div>
      </Section>
      <Footer />
    </Screen>
  )
}
