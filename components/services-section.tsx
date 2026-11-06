"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Palette, ArrowRight, AppWindow, Layers } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, scalable, and maintainable web applications using modern technologies and best practices.",
    features: ["Custom Web Apps", "E-commerce", "CMS Integration", "Frontend Development"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful interfaces that enhance user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: AppWindow,
    title: "Financial Modelling",
    description: "Proficient in financial modeling for forecasting, valuation, and scenario analysis using Excel and advanced tools.",
    features: ["Excel", "Powerpoint", "Scenario Analysis", "Financial Forecasting"],
  },
  {
    icon: Layers,
    title: "Software Development",
    description: "Building robust and scalable software solutions using modern programming languages and frameworks.",
    features: ["Custom Software", "API Development", "Database Design", "System Architecture",],
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">What I Do</span>
          <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">Services</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 glass-card hover:shadow-[0_0_32px_oklch(0.65_0.22_280/0.12)]"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor-hover
            >
              <motion.div
                className="absolute inset-0 bg-accent/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              
              <div className="glow-spot -top-8 -right-8 h-24 w-24 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>

                <h3 className="mb-3 font-serif text-xl font-medium">{service.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-3 w-3 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
