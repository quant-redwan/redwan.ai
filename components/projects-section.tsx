"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
   {
    title: "NVX AI Search Engine",
    description: "A cutting-edge AI-powered search engine designed to provide users with more accurate and relevant results. Built with modern web technologies and integrated with machine learning algorithms for enhanced performance.",
    image: "/nvx-ai-search.png",
    tags: ["TypeScript", "Tailwind", "NextJS"],
    liveUrl: "https://nvx-ai-build.vercel.app/",
    githubUrl: "https://github.com/quant-redwan/nvx-ai-search-engine",
    featured: false,
  },
  {
    title: "INIT Festival Official Website",
    description: "INIT is one of the largest tech festival in the Bangladesh, organized by the NDITC. I developed the official website for the festival, which serves as a comprehensive platform for attendees to access event information, schedules, and updates. The website also encourages collaboration by inviting members to contribute ideas and feedback through the repository.",
    image: "/init6home.png",
    tags: ["TypeScript", "Tailwind", "NodeJS", "NextJS", "Netlify"],
    liveUrl: "https://nditc-init.netlify.app/",
    githubUrl: "https://github.com/nditc/NDITC-INIT",
    featured: false,
  },
  {
    title: "FTMPC Official Website",
    description: "Father Timm Memorial Programming Contest (FTMPC) is a celebration of intellect and creativity, aimed at nurturing the next generation of tech-savvy minds employing languages such as Python, C, or C++ to tackle challenges inspired by the prestigious International Olympiad in Informatics (IOI) format. ",
    image: "/ftmpc6home.png",
    tags: ["TypeScript", "Tailwind", "NodeJS", "NextJS"],
    liveUrl: "https://ftmpc.nditc.net/",
    githubUrl: "https://github.com/nditc/NDITC-FTMPC",
    featured: false,
  },
  {
    title: "NDITC Official Website",
    description: "I developed the official NDITC website, which clearly articulates the organization's mission and showcases the development journey of the platform. It fosters collaboration by inviting NDITC members to contribute innovative ideas to the website repository.",
    image: "/nditcwebhome.png",
    tags: ["TypeScript", "Tailwind", "NodeJS", "NextJS"],
    liveUrl: "https://nditc.net/",
    githubUrl: "https://github.com/nditc/NDITC-WEB",
    featured: false,
  },
  {
    title: "NDITC Mobile App",
    description: "Developed the NDITC Official Mobile App, a native solution delivering convenience and innovation to users' fingertips. Post-beta release, we invited members to test advanced features and provide feedback for refinements. It promotes collaboration by encouraging idea submissions to the website repository.",
    image: "/nditcapp.jpg",
    tags: ["JavaScript", "TypeScript", "CSS", "SCSS", "Figma"],
    liveUrl: "https://raw.githubusercontent.com/nditc/nditc_mobile_app/main/nditc.apk",
    githubUrl: "https://github.com/nditc/nditc_mobile_app",
    featured: false,
  },
  {
    title: "Quant Link Server-1",
    description: "Custom server",
    image: "/Quant Link Server-1.jfif",
    tags: ["Orange Pi"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Spectre 3 Security Camera",
    description: "Security Camera",
    image: "/Spectre 3 Security Camera.jfif",
    tags: ["Arduino"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Spectre NEO 2.0",
    description: "Video Camera",
    image: "/Spectre Neo 2.0.jfif",
    tags: ["Arduino", "Raspberry Pi"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Phi Drive",
    description: "A custom test server using Raspberry Pi",
    image: "/Phi_Drive.jfif",
    tags: [ "Raspberry Pi"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "QRBTS",
    description: "QR code-based traffic management system for smart cities with real-time analytics.",
    image: "/QRBTMS.avif",
    tags: ["C++"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">
            Selected Work
          </span>
          <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl glass-card ${
                project.featured ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor-hover
            >

              <div className="glow-spot -top-10 -right-10 h-32 w-32 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className={`relative overflow-hidden ${project.featured ? "" : "aspect-[4/3]"}`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-700 ${
                    project.featured ? "h-80 md:h-full" : "h-full"
                  }`}
                  animate={{
                    scale: hoveredIndex === i ? 1.05 : 1,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className={`p-6 ${project.featured ? "flex flex-col justify-center" : ""}`}>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="mb-2 font-serif text-2xl font-medium">{project.title}</h3>
                <p className="mb-6 text-muted-foreground">{project.description}</p>

                <div className="flex gap-3">
                  <Button size="sm" className="group/btn" asChild>
                    <a href={project.liveUrl}>
                      View Project
                      <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl}>
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/quant-redwan" target="_blank" rel="noopener noreferrer">
              View More Projects on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
