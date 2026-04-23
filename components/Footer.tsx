'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-noir text-ivoire">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-playfair text-2xl text-white mb-1">Restez inspirés</h3>
            <p className="font-lato text-sm text-white/50">Recevez nos inspirations et actualités en avant-première.</p>
          </div>
          <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 md:w-72 px-4 py-3 bg-white/8 border border-white/20 text-white placeholder:text-white/35 font-lato text-sm outline-none focus:border-or transition-colors"
            />
            <button className="px-6 py-3 bg-or text-white font-lato text-xs tracking-widest uppercase hover:bg-or-light transition-colors whitespace-nowrap">
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-5">
            <span className="font-playfair text-2xl font-bold tracking-[0.25em] text-white block">VELVET</span>
            <span className="font-cormorant text-xs tracking-[0.5em] uppercase text-or block mt-0.5">Moments</span>
          </div>
          <p className="font-lato text-sm text-white/50 leading-relaxed mb-6">
            Chaque instant mérite d'être inoubliable. Nous créons des expériences d'exception
            qui transcendent l'ordinaire.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-lato text-[0.65rem] tracking-widest uppercase text-or mb-5">Navigation</h4>
          <ul className="space-y-3">
            {[['/', 'Accueil'], ['/services', 'Services'], ['/galerie', 'Galerie'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="font-lato text-sm text-white/50 hover:text-or transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-lato text-[0.65rem] tracking-widest uppercase text-or mb-5">Nos Services</h4>
          <ul className="space-y-3">
            {['Mariages', 'Dîners privés', "Déjeuners d'affaires", 'Fêtes & Anniversaires', 'Événements corporate'].map((s) => (
              <li key={s}>
                <Link href="/services" className="font-lato text-sm text-white/50 hover:text-or transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-lato text-[0.65rem] tracking-widest uppercase text-or mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-or mt-0.5 shrink-0" />
              <span className="font-lato text-sm text-white/50">182 Route de l'Étang la Ville, 78750 Mareil-Marly</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-or shrink-0" />
              <a href="tel:+33633329252" className="font-lato text-sm text-white/50 hover:text-or transition-colors">06 33 32 92 52</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-or shrink-0" />
              <a href="mailto:velvetmoments.fr@gmail.com" className="font-lato text-sm text-white/50 hover:text-or transition-colors">velvetmoments.fr@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-lato text-xs text-white/30">
            © {new Date().getFullYear()} Velvet Moments. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-lato text-xs text-white/30 hover:text-or transition-colors">Mentions légales</Link>
            <Link href="#" className="font-lato text-xs text-white/30 hover:text-or transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
