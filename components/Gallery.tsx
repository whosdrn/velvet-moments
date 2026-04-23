'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface GalleryImage {
  src: string
  alt: string
  category: string
}

const CATEGORIES = ['Tous', 'Mariages', 'Dîners', 'Fêtes', 'Corporate']

export default function Gallery({
  images,
  showFilters = true,
}: {
  images: GalleryImage[]
  showFilters?: boolean
}) {
  const [active, setActive] = useState('Tous')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'Tous' ? images : images.filter((i) => i.category === active)

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-lato text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
                active === cat
                  ? 'bg-or border-or text-white'
                  : 'border-noir/25 text-noir hover:border-or hover:text-or'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        <AnimatePresence>
          {filtered.map((img, idx) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              onClick={() => setLightbox(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-noir/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-lato text-[0.65rem] tracking-widest uppercase text-white border border-white/80 px-4 py-2">
                  Agrandir
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-10"
              onClick={() => setLightbox(null)}
              aria-label="Fermer"
            >
              <X size={30} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Précédent"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={800}
                className="max-h-[82vh] w-auto mx-auto object-contain"
              />
              <p className="text-center font-lato text-xs text-white/40 mt-4 tracking-widest uppercase">
                {lightbox + 1} / {filtered.length} — {filtered[lightbox].category}
              </p>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Suivant"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
