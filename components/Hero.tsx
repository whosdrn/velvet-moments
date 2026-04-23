'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
  backgroundImage: string
  cta?: { label: string; href: string }
  fullScreen?: boolean
  overlay?: string
}

export default function Hero({
  title,
  subtitle,
  eyebrow = "Organisation d'événements",
  backgroundImage,
  cta,
  fullScreen = false,
  overlay = 'bg-black/50',
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        fullScreen ? 'h-screen min-h-[600px]' : 'h-[55vh] min-h-[400px]'
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="font-cormorant text-xs md:text-sm uppercase text-or mb-5"
          >
            {eyebrow}
          </motion.p>

          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-none mb-6">
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-cormorant text-xl md:text-2xl lg:text-3xl text-white/75 italic mb-10"
            >
              {subtitle}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                href={cta.href}
                className="inline-block px-10 py-4 border border-or text-or font-lato text-xs tracking-widest uppercase hover:bg-or hover:text-white transition-all duration-400"
              >
                {cta.label}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator — only on fullscreen hero */}
      {fullScreen && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="font-lato text-[0.6rem] tracking-widest uppercase text-white/50">Défiler</span>
          <motion.div
            className="w-px h-10 bg-or origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </section>
  )
}
