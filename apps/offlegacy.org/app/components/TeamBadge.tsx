import Image from 'next/image'
import SpinningText from './SpinningText'

export default function TeamBadge() {
  return (
    <SpinningText
      radius={6}
      fontSize={0.5}
      className="font-medium leading-none"
      renderLogo={
        <Image className="size-10" src="/offlegacy.svg" alt="offlegacy logo" width={40} height={40} priority />
      }
    >
      {'OffLegacy • Korea • Open Source • '}
    </SpinningText>
  )
}
