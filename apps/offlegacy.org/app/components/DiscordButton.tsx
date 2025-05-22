'use client'

import { FaDiscord } from 'react-icons/fa'
import Button from './Button'
import { toast } from 'sonner'
import Track from '../utils/event-tracker'

export default function DiscordButton() {
  const handleClick = () => {
    toast.info('Discord Community is coming soon!')
  }

  return (
    <Track.Click schema="click_button" params={{ event: 'discord_button' }}>
      <Button className="bg-[#546BBD] hover:bg-[#546BBD]/90 shadow-md shadow-[#546BBD]/50" onClick={handleClick}>
        <div className="flex items-center gap-2">
          <FaDiscord size={24} />
          <span className="text-sm font-semibold whitespace-nowrap">JOIN OFFLEGACY DISCORD</span>
        </div>
      </Button>
    </Track.Click>
  )
}
