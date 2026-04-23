'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  icon: string
  href?: string
  delay?: number
}

export default function ServiceCard({
  title,
  description,
  image,
  icon,
  href = '/services',
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden"
    >
      <Link href={href}>
        <div className="relative h-80 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="text-2xl mb-2 block">{icon}</span>
          <h3 className="font-playfair text-xl mb-2 group-hover:text-or transition-colors duration-300">
            {title}
          </h3>
          <p className="font-lato text-sm text-white/65 leading-relaxed line-clamp-2">
            {description}
          </p>
          <span className="inline-block mt-4 font-lato text-[0.65rem] tracking-widest uppercase text-or">
            Découvrir →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
