"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(var(--background), 0.8)"])

  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
     <motion.div
        className="fixed top-0 left-0 right-0 z-40 h-16"
        style={{
          backgroundColor: "var(--background)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: useTransform(scrollY, [0, 80], [0, 0.95]),
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
        <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      </motion.div>

      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 bg-transparent">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <motion.a
            href="#"
            className="relative z-10 font-mono text-xl font-medium tracking-tight text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            REDWANUR RAHAMAN
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden items-center gap-8 md:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              {item.name}
            </motion.a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 rounded-full"
          >
            {mounted && (theme === "dark"
              ? <Sun className="h-4 w-4" />
              : <Moon className="h-4 w-4" />
            )}
          </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {mounted && (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 z-40 bg-background md:hidden"
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-serif text-3xl font-medium"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                transition={{ delay: isOpen ? 0.1 * i : 0 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </header>
    </>
  )
}
