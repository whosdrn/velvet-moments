'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const stats = [
  { value: 250, suffix: '+', label: 'Événements réalisés' },
  { value: 12, suffix: '', label: "Années d'expertise" },
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
  { value: 40, suffix: '+', label: "Partenaires d'exception" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const step = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function CounterSection() {
  return (
    <section className="py-24 bg-or/10 border-y border-or/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <p className="font-playfair text-5xl md:text-6xl text-or mb-3">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-lato text-xs tracking-widest uppercase text-noir/50">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
