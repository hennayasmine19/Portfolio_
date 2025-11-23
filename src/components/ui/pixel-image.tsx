"use client";

import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

type Grid = {
  rows: number;
  cols: number;
};

const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

interface PixelImageProps {
  src: string;
  grid?: PredefinedGridKey;
  customGrid?: Grid;
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number; // in ms
  maxAnimationDelay?: number; // in ms
  colorRevealDelay?: number; // in ms
}

export const PixelImage = ({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  customGrid,
}: PixelImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid?: Grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return (
        Number.isInteger(rows) &&
        Number.isInteger(cols) &&
        rows >= MIN_GRID &&
        cols >= MIN_GRID &&
        rows <= MAX_GRID &&
        cols <= MAX_GRID
      );
    };
    return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  // Function to start animation
  const startAnimation = useCallback(() => {
    // Reset animation state immediately
    setIsVisible(false);
    setShowColor(false);
    setAnimationKey((prev) => prev + 1);
    
    // Use a small delay to ensure state reset is applied
    const resetTimeout = setTimeout(() => {
      // Start pixel fade-in animation
      const visibilityTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      
      // Start color reveal after pixels have appeared
      const colorTimeout = setTimeout(() => {
        setShowColor(true);
      }, colorRevealDelay);
      
      return () => {
        clearTimeout(visibilityTimeout);
        clearTimeout(colorTimeout);
      };
    }, 10);
    
    return () => {
      clearTimeout(resetTimeout);
    };
  }, [colorRevealDelay]);

  // Reset animation when component enters viewport
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let wasIntersecting = false;
    let visibilityTimeout: NodeJS.Timeout;
    let colorTimeout: NodeJS.Timeout;

    const triggerAnimation = () => {
      // Clean up previous animation if any
      if (cleanup) cleanup();
      clearTimeout(visibilityTimeout);
      clearTimeout(colorTimeout);
      
      // Reset animation state immediately
      setIsVisible(false);
      setShowColor(false);
      setAnimationKey((prev) => prev + 1);
      
      // Start pixel fade-in animation after a brief delay
      visibilityTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      
      // Start color reveal after pixels have appeared
      colorTimeout = setTimeout(() => {
        setShowColor(true);
      }, colorRevealDelay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          
          // Only trigger animation when entering viewport (not when already in view)
          if (isIntersecting && !wasIntersecting) {
            triggerAnimation();
          }
          
          // Update the previous state
          wasIntersecting = isIntersecting;
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    // Start animation on initial mount if already in view
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        wasIntersecting = true;
        triggerAnimation();
      }
      
      observer.observe(containerRef.current);
    }

    return () => {
      if (cleanup) cleanup();
      clearTimeout(visibilityTimeout);
      clearTimeout(colorTimeout);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [colorRevealDelay]);

  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;
      // Use animationKey to regenerate random delays on each animation cycle
      const seed = animationKey * 1000 + index;
      const delay = (Math.sin(seed) * 0.5 + 0.5) * maxAnimationDelay;
      return {
        clipPath,
        delay,
      };
    });
  }, [rows, cols, maxAnimationDelay, animationKey]);

  return (
    <div 
      ref={containerRef}
      className="relative h-72 w-72 select-none md:h-96 md:w-96 overflow-hidden rounded-full"
    >
      {pieces.map((piece, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            clipPath: piece.clipPath,
            opacity: isVisible ? 1 : 0,
            transition: `opacity ${pixelFadeInDuration}ms ease-out`,
            transitionDelay: `${piece.delay}ms`,
          }}
        >
          <img
            src={src}
            alt={`Pixel image piece ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: grayscaleAnimation 
                ? (showColor ? "grayscale(0%)" : "grayscale(100%)")
                : "none",
              transition: grayscaleAnimation
                ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
              transitionDelay: grayscaleAnimation ? `${colorRevealDelay}ms` : "0ms",
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

