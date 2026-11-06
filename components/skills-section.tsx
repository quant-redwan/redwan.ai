"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C / C++", "Python", "JavaScript", "TypeScript", "HTML/CSS/SCSS", "Arduino", "NodeJS", "R"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Next.js", "React", "Docker", "Git",  "GitHub", "AWS", "Vercel", "Azure Databricks", "Azure", "Linux"],
  },
  {
    title: "Finance & Quant",
    skills: ["Excel", "Financial Modeling", "Data Analytics", "Market Analysis", "Data Visualization", "Business Strategy"],
  },
  {
    title: "AI ",
    skills: ["Claude Code", "Codex", "Antigravity", "Cursor"],
  },
  {
    title: "Design, Writing & Others",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "UI/UX Design", "Technical Writing"],
  },
]

const technologies = [ /*
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Tailwind",
  "Framer Motion",
  "Three.js",
  "Figma",
  "Docker",
  "AWS",
  "Vercel",
  "Prisma",
  "tRPC",
  "Redis", */
]

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">Expertise</span>
          <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">Skills & Technologies</h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="glow-spot -top-8 -right-8 h-24 w-24 bg-violet-600/10" />
              <h3 className="relative z-10 mb-5 text-base font-medium uppercase tracking-widest text-accent">
                {category.title}
              </h3>
              <div className="relative z-10 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.02 }}
                className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
