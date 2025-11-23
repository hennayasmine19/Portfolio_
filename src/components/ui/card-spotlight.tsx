"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import React, { MouseEvent, useState } from "react";

export const CardSpotlight = ({
  children,
  radius = 350,
  colorStops = [
    "rgba(59,130,246,0.35)",
    "rgba(147,51,234,0.3)",
    "transparent",
  ],
  className,
  ...props
}: {
  radius?: number;
  colorStops?: [string, string, string];
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const spotlightMask = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${smoothX}px ${smoothY}px,
      ${colorStops[0]},
      ${colorStops[1]},
      ${colorStops[2]}
    )
  `;

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className={cn("relative rounded-xl border border-zinc-300 dark:border-zinc-800", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          backgroundImage: spotlightMask,
        }}
      />
      <div className="relative z-10 rounded-xl">{children}</div>
    </motion.div>
  );
};

