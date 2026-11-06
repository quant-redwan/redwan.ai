"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseSize: number
  opacity: number
  opacitySpeed: number
  pulseOffset: number   // random phase offset for pulse
  hueShift: number      // per-particle hue variation
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = -9999
    let mouseY = -9999
    let frame = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      // Increased count — min 80, scales with screen
      const particleCount = Math.min(120, Math.floor((canvas.width * canvas.height) / 12000))

      for (let i = 0; i < particleCount; i++) {
        const base = Math.random() * 1.6 + 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: base,
          baseSize: base,
          opacity: Math.random() * 0.5 + 0.3,
          opacitySpeed: (Math.random() * 0.004 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
          pulseOffset: Math.random() * Math.PI * 2,
          hueShift: Math.random() * 40 - 20, // ±20 degrees from base hue
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    const draw = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Slow global hue drift — cycles every ~600 frames
      const globalHue = (frame * 0.3) % 360
      const baseHue = resolvedTheme === "dark" ? 260 + globalHue * 0.1 : 255 + globalHue * 0.1

      particles.forEach((particle, i) => {
        // Position update
        particle.x += particle.vx
        particle.y += particle.vy

        // Opacity breathing animation
        particle.opacity += particle.opacitySpeed
        if (particle.opacity > 0.85 || particle.opacity < 0.15) {
          particle.opacitySpeed *= -1
        }

        // Size pulse — sinusoidal, each particle has its own phase
        const pulse = Math.sin(frame * 0.025 + particle.pulseOffset)
        particle.size = particle.baseSize + pulse * 0.4

        // Mouse interaction — attract when far, repel when close
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200
          if (dist > 80) {
            // Attract gently when in outer ring
            particle.vx += (dx / dist) * force * 0.008
            particle.vy += (dy / dist) * force * 0.008
          } else {
            // Repel strongly when too close
            particle.vx -= (dx / dist) * force * 0.03
            particle.vy -= (dy / dist) * force * 0.03
          }
        }

        // Boundary — wrap around instead of bounce for smoother feel
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        // Speed cap
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2)
        if (speed > 1.5) {
          particle.vx = (particle.vx / speed) * 1.5
          particle.vy = (particle.vy / speed) * 1.5
        }

        // Damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Per-particle hue
        const hue = baseHue + particle.hueShift

        // Draw particle with glow
        // Glow for both themes — stronger in light mode
        const glowSize = resolvedTheme === "dark" ? particle.size * 3 : particle.size * 4
        const glowOpacity = resolvedTheme === "dark" ? particle.opacity * 0.4 : particle.opacity * 0.5
        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        )
        glow.addColorStop(0, `hsla(${hue}, 85%, 45%, ${glowOpacity})`)
        glow.addColorStop(1, `hsla(${hue}, 85%, 45%, 0)`)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = resolvedTheme === "dark"
          ? `hsla(${hue}, 80%, 72%, ${particle.opacity})`
          : `hsla(${hue}, 70%, 35%, ${particle.opacity * 1.2})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const distance = Math.sqrt((particle.x - other.x) ** 2 + (particle.y - other.y) ** 2)
          const connectionRadius = 100

          if (distance < connectionRadius) {
            const lineOpacity = (1 - distance / connectionRadius) * 0.15
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = resolvedTheme === "dark"
              ? `hsla(${hue}, 70%, 70%, ${lineOpacity})`
              : `hsla(${hue}, 75%, 35%, ${lineOpacity * 1.8})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
}