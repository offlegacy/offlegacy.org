import Image from 'next/image'
import SpinningText from './SpinningText'
import { cn } from '../utils/style'

interface Props {
  className?: string
}

export default function TeamBadge({ className }: Props) {
  return (
    <SpinningText
      radius={6}
      fontSize={0.5}
      className={cn('font-medium leading-none', className)}
      renderLogo={
        <Image className="size-10" src="/offlegacy.svg" alt="offlegacy logo" width={40} height={40} priority />
      }
    >
      {'OffLegacy • Korea • Open Source • '}
    </SpinningText>
  )
}
