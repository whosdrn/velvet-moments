import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Demande envoyée',
  description: 'Votre demande a bien été envoyée. Nous vous recontacterons très prochainement.',
}

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
          alt="Confirmation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-noir/70" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white">
        <div className="w-20 h-20 rounded-full border border-or flex items-center justify-center mx-auto mb-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">
          Message reçu
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl mb-6 leading-tight">
          Merci pour votre confiance
        </h1>
        <div className="w-12 h-px bg-or mx-auto mb-8" />
        <p className="font-cormorant text-xl text-white/75 italic mb-4">
          "Chaque grand événement commence par une conversation."
        </p>
        <p className="font-lato text-sm text-white/60 leading-relaxed mb-12">
          Votre demande a bien été transmise à notre équipe. Un(e) consultant(e) Velvet Moments
          prendra contact avec vous dans les <strong className="text-or">24 heures ouvrées</strong> pour
          une consultation personnalisée et sans engagement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-10 py-4 bg-or text-white font-lato text-xs tracking-widest uppercase hover:bg-white hover:text-noir transition-all duration-300"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/galerie"
            className="px-10 py-4 border border-white/40 text-white font-lato text-xs tracking-widest uppercase hover:border-or hover:text-or transition-all duration-300"
          >
            Explorer la galerie
          </Link>
        </div>
      </div>
    </div>
  )
}
