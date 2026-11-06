"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "done">("counting");

  useEffect(() => {
    // Smooth deterministic progress: fast start, eases near 100
    const duration = 1800; // ms total
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease-out cubic: fast then slow
      const eased = 1 - Math.pow(1 - t, 3);
      const p = Math.round(eased * 100);
      setProgress(p);

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setPhase("done");
        setTimeout(() => setIsLoading(false), 600);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[80px]" />
          </div>

          {/* Name */}
          <motion.div
            className="relative mb-10 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="font-serif text-5xl md:text-7xl font-medium tracking-[-0.03em] text-foreground">
              redwan
            </span>
            <span className="font-mono text-5xl md:text-7xl font-light tracking-[-0.03em] text-accent">
              .ai
            </span>
          </motion.div>

          {/* Progress bar — thin, accent colored */}
          <motion.div
            className="relative w-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-[1px] w-full bg-border" />
            <motion.div
              className="absolute top-0 left-0 h-[1px] bg-accent"
              style={{ width: `${progress}%` }}
            />
          </motion.div>

          {/* Counter */}
          <motion.span
            className="mt-4 font-mono text-xs tabular-nums text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {progress.toString().padStart(3, "0")}
          </motion.span>

          {/* Exit line — brief status text */}
          <motion.span
            className="absolute bottom-12 font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "done" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            initializing
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}