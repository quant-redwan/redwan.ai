"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Facebook, Github, Linkedin, Twitter,} from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ParticleField } from "@/components/particle-field"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <ParticleField/>
       {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="glow-spot top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 bg-violet-600/15" />
        <div className="glow-spot top-1/3 left-1/3 h-64 w-64 bg-sky-500/10" />
      </div>
      <motion.div className="relative z-10 mx-auto max-w-5xl text-center" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-300 dark:text-violet-300 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300 border-violet-600/60 bg-violet-100 text-violet-700">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 font-serif text-5xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <span className="block">Crafting Digital</span>
          <span className="block text-gradient">Experiences</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          I'm Redwanur Rahaman, a developer and designer building exceptional digital products that blend aesthetics
          with functionality.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <Button size="lg" className="group px-8 shadow-[0_0_24px_oklch(0.65_0.22_280/0.35)] hover:shadow-[0_0_36px_oklch(0.65_0.22_280/0.55)] transition-shadow" asChild>
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          {[
            { icon: Github, href: "https://github.com/quant-redwan", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/redwanurrahaman/", label: "LinkedIn" },
            { icon: Facebook, href: "https://www.facebook.com/R3DE0N", label: "Facebook"},
            { icon: Twitter, href: "https://x.com/redwanurrahaman", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
