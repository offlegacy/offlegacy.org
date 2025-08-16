import { createTracker } from '@offlegacy/event-tracker'
import posthog from 'posthog-js'
import { z } from 'zod'

interface Context {
  userId: string
}

interface Params {
  event: string
}

const schemas = {
  page_view: z.object({
    title: z.string(),
  }),
  click_button: z.object({
    event: z.string(),
  }),
}

export const [Track, useTrack] = createTracker<Context, Params, typeof schemas>({
  DOMEvents: {
    onClick: (params: Params) => {
      posthog.capture(params.event)
    },
  },
  schema: { schemas },
})
