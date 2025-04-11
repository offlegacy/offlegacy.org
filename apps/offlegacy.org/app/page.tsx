import Image from 'next/image'
import Screen from './components/Screen'
import Link from 'next/link'
import { GrGithub } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import Tag from './components/Tag'
import ProjectCard from './components/ProjectCard'
import ProfileCard from './components/ProfileCard'
import Section from './components/Section'
import { FaDiscord } from 'react-icons/fa'
import Button from './components/Button'
import Footer from './components/Footer'
import { PROJECT_STATUS } from './constants'

export default function Home() {
  return (
    <Screen>
      <Section>
        <Image className="mb-6" src="/offlegacy.svg" alt="offlegacy logo" width={110} height={110} priority />
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
          <ProjectCard
            href="https://event-tracker.offlegacy.org"
            title="Event Tracker"
            description="Comprehensive solution for event tracking in React applications."
            renderStatus={<Tag variant="blue">{PROJECT_STATUS.NEW}</Tag>}
          />
          <ProjectCard
            href="https://github.com/offlegacy/git-intent"
            title="Git Intent"
            description="Git workflow tool for intentional commits."
            renderStatus={<Tag variant="yellow">{PROJECT_STATUS.ALPHA}</Tag>}
            disabled
          />
          <ProjectCard
            href="https://github.com/offlegacy/vscode-yarn-catalog-lens"
            title="VSCode Yarn Catalog Lens"
            description="VSCode extension for Yarn Catalog."
            renderStatus={<Tag variant="yellow">{PROJECT_STATUS.ALPHA}</Tag>}
            disabled
          />
          <ProjectCard
            href="https://github.com/offlegacy/flags"
            title="Flags"
            description="Flexible feature flag system for React applications."
            renderStatus={<Tag variant="yellow">{PROJECT_STATUS.ALPHA}</Tag>}
            disabled
          />
          <ProjectCard
            href="https://github.com/offlegacy/react-start"
            title="React Start"
            description="React execution pipeline."
            renderStatus={<Tag variant="yellow">{PROJECT_STATUS.ALPHA}</Tag>}
            disabled
          />
          <ProjectCard
            href="https://github.com/offlegacy/sand-kit"
            title="SandKit"
            description="Code Playground."
            renderStatus={<Tag variant="yellow">{PROJECT_STATUS.ALPHA}</Tag>}
            disabled
          />
        </div>
      </Section>
      <Section>
        <h2 className="font-semibold text-3xl">Meet the Team</h2>
        <p className="text-zinc-400">
          We're developers who find joy in coding and are passionate about contributing to the open-source ecosystem.
        </p>
        <div className="flex flex-wrap gap-6 pt-4">
          <ProfileCard firstName="Gwansik" lastName="Kim" github="gwansikk" />
          <ProfileCard firstName="Juhyeok" lastName="Kang" github="kangju2000" />
          <ProfileCard firstName="Taehwan" lastName="Hwang" github="stakbucks" />
        </div>
      </Section>
      <Section className="border rounded-lg px-8 py-6 bg-zinc-900 border-zinc-800">
        <h2 className="font-semibold text-3xl">Join the OffLegacy Community</h2>
        <p className="text-zinc-400">
          OffLegacy is a space for open-source collaboration. Share your story, contribute your ideas, and grow with us.
        </p>
        <div className="flex items-center gap-2">
          <Button className="bg-[#546BBD] hover:bg-[#546BBD]/90 shadow-md shadow-[#546BBD]/50">
            <div className="flex items-center gap-2">
              <FaDiscord size={24} />
              <span className="text-sm font-semibold">JOIN OFFLEGACY DISCORD</span>
            </div>
          </Button>
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
