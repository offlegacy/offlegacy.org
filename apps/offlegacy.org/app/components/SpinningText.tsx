'use client'

import { motion, type Transition, type Variants } from 'motion/react'
import { cn } from '../utils/style'

type SpinningTextProps = {
  renderLogo?: React.ReactNode
  children: string
  style?: React.CSSProperties
  duration?: number
  className?: string
  reverse?: boolean
  fontSize?: number
  radius?: number
  transition?: Transition
  variants?: {
    container?: Variants
    item?: Variants
  }
}

const BASE_TRANSITION = {
  repeat: Number.POSITIVE_INFINITY,
  ease: 'linear',
} as const

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
}

export default function SpinningText({
  renderLogo,
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  fontSize = 1,
  radius = 5,
  transition,
  variants,
}: SpinningTextProps) {
  const letters = children.split('')
  const totalLetters = letters.length

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition as { duration?: number })?.duration ?? duration,
  }

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  }

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  }

  return (
    <div className={cn('relative', className)} style={style}>
      <motion.div
        className="relative"
        style={{ position: 'absolute', top: '50%', left: '50%' }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={finalTransition}
      >
        {letters.map((letter, index) => (
          <motion.span
            aria-hidden="true"
            key={`${index}-${letter}`}
            variants={itemVariants}
            className="absolute left-1/2 top-1/2 inline-block"
            style={
              {
                '--index': index,
                '--total': totalLetters,
                '--font-size': fontSize,
                '--radius': radius,
                fontSize: 'calc(var(--font-size, 2) * 1rem)',
                transform: `
                    translate(-50%, -50%)
                    rotate(calc(360deg / var(--total) * var(--index)))
                    translateY(calc(var(--radius, 5) * -1ch))
                  `,
                transformOrigin: 'center',
              } as React.CSSProperties
            }
          >
            {letter}
          </motion.span>
        ))}
        <span className="sr-only">{children}</span>
      </motion.div>
      {renderLogo}
    </div>
  )
}
