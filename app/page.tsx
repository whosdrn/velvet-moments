import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: "Velvet Moments — Organisation d'événements d'exception",
}

const services = [
  {
    title: 'Mariages',
    description: "De la cérémonie à la réception, nous orchestrons chaque détail de votre jour le plus précieux avec grâce et perfection.",
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    icon: '💍',
  },
  {
    title: 'Dîners privés',
    description: "Des dîners d'exception dans des cadres intimistes, où la gastronomie rencontre l'art de la table pour créer des souvenirs impérissables.",
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    icon: '🍽️',
  },
  {
    title: "Déjeuners d'affaires",
    description: "Impressionnez vos partenaires et clients lors de déjeuners d'affaires raffinés, alliant excellence culinaire et efficacité professionnelle.",
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    icon: '🤝',
  },
  {
    title: 'Fêtes & Anniversaires',
    description: "Chaque célébration mérite une mise en scène unique. Nous créons des fêtes sur mesure qui reflètent votre personnalité et enchantent vos invités.",
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    icon: '🥂',
  },
  {
    title: 'Événements corporate',
    description: "Séminaires, lancements de produits, galas d'entreprise — nous concevons des événements professionnels qui renforcent votre image de marque.",
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    icon: '🏛️',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Mariage élégant', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Dîner raffiné', span: '' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Événement corporate', span: '' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Cérémonie de mariage', span: '' },
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80', alt: 'Fête privée', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80', alt: 'Déjeuner d\'affaires', span: '' },
  { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80', alt: 'Décoration florale', span: '' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', alt: 'Table dressée', span: '' },
  { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80', alt: 'Réception', span: '' },
]

const partners = [
  'Le Grand Véfour', 'Hôtel de Crillon', 'Château Margaux',
  'Ladurée', 'Dior Maison', 'Château Vaux-le-Vicomte',
]

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <Hero
        fullScreen
        title="Velvet Moments"
        subtitle="Chaque instant mérite d'être inoubliable"
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85"
        cta={{ label: 'Découvrir nos prestations', href: '/services' }}
        overlay="bg-gradient-to-b from-black/60 via-black/40 to-black/60"
      />

      {/* ─── Philosophy ─── */}
      <section className="py-28 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Notre Philosophie</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-noir mb-6 leading-tight">
                L'art de sublimer<br />chaque célébration
              </h2>
              <div className="w-12 h-px bg-or mb-8" />
              <p className="font-lato text-base text-noir/65 leading-relaxed mb-6">
                Chez Velvet Moments, nous croyons que chaque événement est une œuvre d'art en devenir.
                Notre approche allie l'excellence artisanale française à une créativité sans limite,
                pour transformer vos rêves en réalités qui dépassent toutes les espérances.
              </p>
              <p className="font-lato text-base text-noir/65 leading-relaxed mb-10">
                De la première consultation jusqu'au dernier instant de votre événement, notre équipe
                de passionnés vous accompagne avec une attention minutieuse à chaque détail, une
                écoute attentive et un engagement absolu envers votre satisfaction.
              </p>
              <Link
                href="/a-propos"
                className="inline-block font-lato text-xs tracking-widest uppercase text-or border-b border-or pb-1 hover:text-noir hover:border-noir transition-colors duration-300"
              >
                Notre histoire →
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative">
                <div className="relative h-[560px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85"
                    alt="Art de la table Velvet Moments"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-or opacity-40 -z-10" />
                <div className="absolute -top-6 -right-6 w-48 h-48 border border-or opacity-40 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-28 bg-noir">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Ce que nous créons</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4 leading-tight">Nos Prestations</h2>
            <div className="w-12 h-px bg-or mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2">
            {services.slice(3).map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={(i + 3) * 0.1} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link
              href="/services"
              className="inline-block px-10 py-4 border border-or text-or font-lato text-xs tracking-widest uppercase hover:bg-or hover:text-white transition-all duration-300"
            >
              Voir toutes nos prestations
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Gallery preview ─── */}
      <section className="py-28 bg-rose/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Nos Réalisations</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-noir mb-4 leading-tight">Une fenêtre sur la beauté</h2>
            <div className="w-12 h-px bg-or mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
            {galleryImages.map((img, i) => (
              <AnimatedSection
                key={img.src}
                delay={i * 0.07}
                className={`relative overflow-hidden group ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-noir/20 group-hover:bg-noir/40 transition-colors duration-300" />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-block px-10 py-4 border border-noir text-noir font-lato text-xs tracking-widest uppercase hover:bg-noir hover:text-white transition-all duration-300"
            >
              Voir la galerie complète
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Numbers ─── */}
      <section className="py-24 bg-ivoire border-y border-or/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '250+', label: 'Événements réalisés' },
              { value: '12', label: "Années d'expertise" },
              { value: '98%', label: 'Clients satisfaits' },
              { value: '40+', label: 'Partenaires d\'exception' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <p className="font-playfair text-5xl md:text-6xl text-or mb-2">{stat.value}</p>
                <p className="font-lato text-xs tracking-widest uppercase text-noir/55">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-28 bg-noir">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Témoignages</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4">Ils nous font confiance</h2>
            <div className="w-12 h-px bg-or mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Velvet Moments a su transformer notre mariage en un véritable conte de fées. Chaque détail était parfait, chaque instant magique. Nous leur serons éternellement reconnaissants.",
                author: "Sophie & Thomas M.",
                event: "Mariage — Château de Vaux-le-Vicomte",
              },
              {
                quote: "Pour notre gala annuel, l'équipe de Velvet Moments a orchestré un événement d'une élégance absolue. Nos 300 invités ont été subjugués. Une prestation hors pair.",
                author: "Jean-Philippe D.",
                event: "Gala corporate — Hôtel de Crillon",
              },
              {
                quote: "Un anniversaire dont je me souviendrai toute ma vie. L'attention portée à chaque détail, la décoration florale sublime, le service impeccable... Tout était au-delà de mes espérances.",
                author: "Isabelle R.",
                event: "Anniversaire privé — Paris 8e",
              },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="border border-white/10 p-8 h-full">
                  <p className="font-cormorant text-4xl text-or mb-4">"</p>
                  <p className="font-cormorant text-lg text-white/75 leading-relaxed italic mb-8">
                    {t.quote}
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-playfair text-sm text-white">{t.author}</p>
                    <p className="font-lato text-xs text-or mt-1">{t.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partners ─── */}
      <section className="py-20 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-12">
            <p className="font-lato text-xs tracking-widest uppercase text-noir/40 mb-2">
              Ils nous font confiance depuis des années
            </p>
            <div className="w-12 h-px bg-or/40 mx-auto" />
          </AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((p, i) => (
              <AnimatedSection key={p} delay={i * 0.08}>
                <span className="font-playfair text-lg md:text-xl text-noir/25 hover:text-or transition-colors duration-300 cursor-default">
                  {p}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80"
            alt="Créez votre événement parfait"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-noir/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Commençons ensemble</p>
            <h2 className="font-playfair text-4xl md:text-5xl mb-6 leading-tight">
              Votre événement mérite<br />une attention singulière
            </h2>
            <p className="font-lato text-sm text-white/65 mb-10 leading-relaxed">
              Chaque grand moment commence par une conversation. Contactez-nous pour une
              consultation personnalisée et sans engagement — nous sommes à votre écoute.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-or text-white font-lato text-xs tracking-widest uppercase hover:bg-white hover:text-noir transition-all duration-300"
            >
              Obtenir un devis gratuit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
