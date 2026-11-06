"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Briefcase, Code2, Sparkles, GraduationCap, BookOpen, Heart } from "lucide-react"

const stats = [
  { value: "8+", label: "Years Experience", icon: Briefcase },
  { value: "30+", label: "Projects Completed", icon: Code2 },
  { value: "-", label: "Clients", icon: Sparkles },
  { value: "25+", label: "Awards & Certifications", icon: Award },
]

const experiences = [
  {
    period: "Feb 2018 — Sep 2025",
    role: "Mentor",
    company: "Bangladesh Open Source Network (BdOSN)",
    description: "Led the frontend team in crafting the fastest project management tool.",
  },
  {
    period: "Sep 2024 - Oct 2024",
    role: "Research Analyst - Math",
    company: "Turing AI",
    description: "Solved mathematical questions which were used to train LLMs.",
  },
  {
    period: "Apr 2022 — Oct 2023",
    role: "Lead Developer",
    company: "Spectre Dynamics Ltd",
    description: "Builded security CAMs, custom NAS(s).",
  },
  {
    period: "Jan 2019 — Mar 2020",
    role: "Information Technology Intern",
    company: "IgniterSpace Bangladesh",
    description: "Circuits and electronics development.",
  },
  {
    period: "May 2018 — Oct 2021",
    role: "Research Fellow",
    company: "Maqsudual Alam Science Lab (MASLab)",
    description: "Learnt multiple programming languages for problem solving and smaller application development.",
  },
]

const voluntary = [
  {
    period: "Oct 2023 — May 2025",
    role: "President, Archive, Workshop & Seminar (AWS)",
    company: "Notre Dame Information Technology Club (NDITC)",
    description: "Organized the most workshops and seminars in the history of NDITC. Guided organizers and volunteers in organizing the flagship event INIT 6.0. and FTMPC 6.0.",
  },
  {
    period: "Oct 2023 — May 2025",
    role: "Secretary, IT + Aesthetics ",
    company: "Notre Dame Eco and Space Club (NDESC)",
    description: "As a secretary, I was responsible for managing the club's IT infrastructure, including website maintenance, social media management, and ensuring smooth communication within the club. As an aesthetics member, I contributed to the visual design and branding of club events and materials.",
  },
  {
    period: "Oct 2023 — May 2025",
    role: "Volunteer to Organizer",
    company: "Notre Dame Information Technology Club (NDITC)",
    description: "Organized tech events, workshops, and coding competitions to foster a vibrant tech community on campus. INIT 4.0 and 5.0, FTMPC 4.0 and 5.0 were some of the major events.",
  }, 
  {
    period: "Feb 2024 - Jun 2024",
    role: "Volunteer to Organizer ",
    company: "Notre Dame Eco and Space Club (NDESC)",
    description: "As a volunteer, I helped organize events and activities related to environmental awareness and space exploration. As an organizer, I contributed to the planning and execution of workshops, seminars, and community outreach programs, reached out with MNC(s), banks and other companies for sponsorships and collaborated with other clubs for  yearly festival events and also joint events.",
  },
  {
    period: "Jan 2019 - Mar 2019 ",
    role: "BBLTJ Member, Batch 15",
    company: "Bangladesh Youth Leadership Center (BYLC)",
    description: "Selected as one of the 100 students nationwide to participate in the Bangladesh Leadership Training Journey (BBLTJ) program, which focuses on developing leadership skills and fostering social impact among young leaders.",
  },
  // Add more entries as needed
]

const education = [
  {
    period: "Oct 2026 — Present",
    degree: "B.Sc. in Software Engineering",
    institution: "Islamic University of Technology (IUT)",
    description:
      "Pursuing a Bachelor's degree with a focus on software systems & architecture, algorithms, machine learning, NLP, and applied computer science. Active in research and technical communities on campus.",
    icon: GraduationCap,
  },
  {
    period: "2023 — 2025",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Notre Dame College, Dhaka",
    description:
      "HSC in Science. Specializing in Physics, Mathematics, Chemistry.",
    icon: BookOpen,
  },
  {
    period: "2021 — 2023",
    degree: "Senior School Certificate (SSC)",
    institution: "Scholars' School & College",
    description:
      "SSC in Science. Specializing in Physics, Mathematics, Chemistry, and Biology.",
    icon: BookOpen,
  },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const eduInView = useInView(eduRef, { once: true, margin: "-100px" })

  return (
    <>
      <section id="about" className="relative py-32 px-6" ref={ref}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">About</span>
              <h2 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Building digital products that make a difference
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Redwan, Freshman at{" "}
                  <span className="font-medium text-foreground">
                    Islamic University of Technology (IUT), Dhaka, Bangladesh
                  </span>
                  , I am actively pursuing a Bachelor's degree in{" "}
                  <span className="font-medium text-foreground">Software Engineering</span> and an alumnus of Notre
                  Dame College, Dhaka (Batch 2025). My academic journey has been marked by a commitment to learning and a
                  passion for Quant, Finance, AI, Technology & Data.
                </p>
                <p>
                  I am eager to apply my knowledge and skills in a professional setting and am looking for
                  opportunities that will allow me to grow and make a meaningful impact. Let's connect!
                </p>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="mx-auto mb-2 h-5 w-5 text-accent" />
                    <div className="font-mono text-4xl font-semibold tracking-tight text-foreground">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Experience + Voluntary */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Experience */}
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">
                Experience
              </span>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="group relative border-l-2 border-border pl-6 transition-colors hover:border-accent"
                  >
                    <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {exp.period}
                    </span>
                    <h3 className="mt-1 font-medium">
                      {exp.role} · <span className="text-accent">{exp.company}</span>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Voluntary Experience */}
              <div className="mt-14">
                <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent">
                  <Heart className="h-3.5 w-3.5" />
                  Voluntary Experience
                </span>
                <div className="mt-4 space-y-8">
                  {voluntary.map((vol, i) => (
                    <motion.div
                      key={vol.role + vol.company}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                      className="group relative border-l-2 border-border pl-6 transition-colors hover:border-accent"
                    >
                      <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
                      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        {vol.period}
                      </span>
                      <h3 className="mt-1 font-medium">
                        {vol.role} · <span className="text-accent">{vol.company}</span>
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{vol.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 overflow-hidden rounded-2xl bg-secondary"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Education Section ── */}
      <section id="education" className="relative py-12 px-6" ref={eduRef}>
        {/* subtle top divider */}
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 h-px w-full bg-border" />
        </div>

        <div className="mx-auto max-w-7xl pt-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left — heading + caption */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={eduInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">
                Education
              </span>
              <h2 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                My Academic Path
              </h2>
              <p className="text-muted-foreground"></p>
            </motion.div>

            {/* Right — education timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={eduInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={eduInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="group relative border-l-2 border-border pl-6 transition-colors hover:border-accent"
                >
                  <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {edu.period}
                  </span>
                  <h3 className="mt-1 font-medium">
                    {edu.degree} · <span className="text-accent">{edu.institution}</span>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}