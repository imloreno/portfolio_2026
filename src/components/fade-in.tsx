"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type FadeInProps = HTMLMotionProps<"div"> & {
  /** Delay in seconds before the animation starts. */
  delay?: number;
};

/**
 * Small, reusable entrance animation that respects `prefers-reduced-motion`.
 * Wrap anything you want to fade + rise into view on mount.
 */
export function FadeIn({ delay = 0, children, ...props }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
