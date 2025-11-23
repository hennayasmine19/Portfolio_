"use client"

import { motion, MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string
  as?: React.ElementType
}

export function LineShadowText({
  children,
  shadowColor = "black",
  className,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const MotionComponent = motion.create(Component)

  const content = typeof children === "string" ? children : null

  if (!content) {
    throw new Error("LineShadowText only accepts string content")
  }

  return (
    <MotionComponent
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(
        "relative z-0 inline-flex text-transparent whitespace-nowrap",
        "after:absolute after:top-[0.04em] after:left-[0.04em] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_30%,var(--shadow-color)_30%,var(--shadow-color)_70%,transparent_70%)]",
        "after:-z-10 after:bg-[length:0.12em_0.12em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow after:whitespace-nowrap",
        className
      )}
      data-text={content}
      {...props}
    >
      {content}
    </MotionComponent>
  )
}

