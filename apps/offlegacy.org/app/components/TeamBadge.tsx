import Image from 'next/image'
import SpinningText from './SpinningText'

export default function TeamBadge() {
  return (
    <SpinningText
      radius={6}
      fontSize={0.4}
      className="font-medium leading-none"
      renderLogo={
        <Image className="size-8" src="/offlegacy.svg" alt="offlegacy logo" width={32} height={32} priority />
      }
    >
      {'OffLegacy • Korea • Open Source • '}
    </SpinningText>
  )
}
