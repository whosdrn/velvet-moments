'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/96 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`font-playfair text-xl font-bold tracking-[0.25em] transition-colors duration-300 ${
              solid ? 'text-noir' : 'text-white'
            }`}
          >
            VELVET
          </span>
          <span className="font-cormorant text-[0.6rem] tracking-[0.5em] uppercase text-or mt-0.5">
            Moments
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-lato text-xs tracking-widest uppercase transition-colors duration-300 hover:text-or ${
                  solid ? 'text-noir' : 'text-white'
                } ${pathname === link.href ? '!text-or' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2.5 border border-or text-or font-lato text-xs tracking-widest uppercase hover:bg-or hover:text-white transition-all duration-300"
        >
          Devis gratuit
        </Link>

        {/* Hamburger */}
        <button
          className={`md:hidden transition-colors duration-300 ${solid ? 'text-noir' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-rose overflow-hidden"
          >
            <ul className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-lato text-xs tracking-widest uppercase hover:text-or transition-colors ${
                      pathname === link.href ? 'text-or' : 'text-noir'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 border border-or text-or font-lato text-xs tracking-widest uppercase hover:bg-or hover:text-white transition-all duration-300 mt-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Devis gratuit
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
