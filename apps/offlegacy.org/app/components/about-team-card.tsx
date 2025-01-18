import Image from 'next/image'
import Link from 'next/link'

const AboutTeamCard = () => {
  return (
    <section className="mx-auto flex flex-col items-center space-y-1.5">
      <Image src="/offlegacy.svg" alt="offlegacy logo" width={256} height={256} priority />
      <h1 className="text-3xl font-bold">OffLegacy</h1>
      <h2 className="text-xl font-semibold">Open-source Development Team in South Korea 🇰🇷</h2>
      <div className="py-4">
        <Link
          href="https://github.com/offlegacy"
          className="border px-2 py-1.5 hover:bg-gray-100 rounded-md hover:text-black transition-colors"
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}

export default AboutTeamCard
