"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, ArrowUp, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Socials",
    links: [
      { name: "GitHub", href: "https://github.com/quant-redwan", icon: Github },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/redwanurrahaman/", icon: Linkedin },
      { name: "Facebook", href: "https://www.facebook.com/R3DEON/", icon: Facebook }, 
      { name: "X.com", href: "https://x.com/redwanurrahaman", icon: Twitter },
    ],
  },
];

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative border-t border-white/10 px-6 py-16">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-12 md:grid-cols-4"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#"
               className="font-mono text-2xl font-medium tracking-tight text-foreground"
            >
              REDWANUR RAHAMAN
            </a>
            <p className="mt-4 max-w-sm text-base text-muted-foreground leading-relaxed">
              Software engineer & quant finance enthusiast.<br />
              Building at the intersection of code, data, and design.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-base font-medium uppercase tracking-widest text-muted-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {"icon" in link && link.icon && (
                        <link.icon className="h-4 w-4" />
                      )}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
        >
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} Redwanur Rahaman. All rights reserved.
          </p>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="group bg-transparent"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}
