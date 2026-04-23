import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import AnimatedSection from '@/components/AnimatedSection'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contactez Velvet Moments pour discuter de votre projet événementiel. Devis gratuit et sans engagement.",
}

const coordonnees = [
  {
    icon: MapPin,
    label: 'Adresse',
    content: '182 Route de l\'Étang la Ville\n78750 Mareil-Marly',
    href: null,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    content: '06 33 32 92 52',
    href: 'tel:+33633329252',
  },
  {
    icon: Mail,
    label: 'Email',
    content: 'velvetmoments.fr@gmail.com',
    href: 'mailto:velvetmoments.fr@gmail.com',
  },
  {
    icon: Clock,
    label: 'Horaires',
    content: 'Lundi – Vendredi : 9h – 19h\nSamedi : 10h – 17h\nSur RDV le dimanche',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contactez-nous"
        subtitle="Commençons à construire votre événement ensemble"
        backgroundImage="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=85"
        overlay="bg-noir/65"
      />

      {/* ─── Nos coordonnées ─── */}
      <section className="py-16 bg-noir">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-12">
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-3">Nos coordonnées</p>
            <h2 className="font-playfair text-3xl text-white">Retrouvez-nous</h2>
            <div className="w-12 h-px bg-or mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordonnees.map((item, i) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={item.label} delay={i * 0.1}>
                  <div className="border border-white/10 p-7 text-center hover:border-or/40 transition-colors duration-300">
                    <Icon size={22} className="text-or mx-auto mb-4" />
                    <p className="font-lato text-[0.65rem] tracking-widest uppercase text-or mb-3">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-lato text-sm text-white/70 hover:text-or transition-colors leading-relaxed"
                      >
                        {item.content.split('\n').map((line, j) => (
                          <span key={j} className="block">{line}</span>
                        ))}
                      </a>
                    ) : (
                      <div className="font-lato text-sm text-white/70 leading-relaxed">
                        {item.content.split('\n').map((line, j) => (
                          <span key={j} className="block">{line}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Formulaire ─── */}
      <section className="py-24 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Votre projet</p>
                <h2 className="font-playfair text-3xl md:text-4xl text-noir mb-4 leading-tight">
                  Parlez-nous de votre événement
                </h2>
                <div className="w-12 h-px bg-or mb-8" />
                <p className="font-lato text-sm text-noir/60 leading-relaxed mb-10">
                  Remplissez ce formulaire et nous vous recontacterons sous 24 heures pour une
                  consultation personnalisée gratuite. Plus vous partagez de détails, plus nous
                  pourrons vous proposer une offre adaptée.
                </p>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Sidebar reassurance */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-white border border-or/15 p-8 mb-8">
                  <p className="font-lato text-[0.65rem] tracking-widest uppercase text-or mb-6">Nos engagements</p>
                  <ul className="space-y-4">
                    {[
                      ['✦', 'Devis gratuit et sans engagement'],
                      ['✦', 'Réponse sous 24 heures ouvrées'],
                      ['✦', 'Consultation personnalisée offerte'],
                      ['✦', 'Confidentialité absolue garantie'],
                    ].map(([icon, text]) => (
                      <li key={text} className="flex items-start gap-3">
                        <span className="text-or text-xs mt-0.5 shrink-0">{icon}</span>
                        <span className="font-lato text-sm text-noir/65">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-noir p-8">
                  <p className="font-playfair text-lg text-white mb-3">Une question rapide ?</p>
                  <p className="font-lato text-sm text-white/55 leading-relaxed mb-5">
                    Appelez-nous directement, nous sommes disponibles du lundi au samedi.
                  </p>
                  <a
                    href="tel:+33633329252"
                    className="inline-block font-lato text-sm text-or border border-or px-5 py-3 hover:bg-or hover:text-white transition-all duration-300 tracking-wider"
                  >
                    06 33 32 92 52
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="h-96 bg-noir/5 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342886!2d2.330522!3d48.868901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sRue+de+la+Paix%2C+Paris!5e0!3m2!1sfr!2sfr!4v1600000000000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation Velvet Moments"
        />
      </section>
    </>
  )
}
