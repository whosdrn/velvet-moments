import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Nos Prestations',
  description:
    "Découvrez toutes les prestations événementielles de Velvet Moments : mariages, dîners privés, déjeuners d'affaires, fêtes & anniversaires, événements corporate.",
}

const services = [
  {
    id: 'mariages',
    title: 'Mariages',
    icon: '💍',
    tagline: "Le plus beau jour de votre vie, orchestré avec amour",
    description:
      "Votre mariage est unique, et il mérite une attention qui l'est tout autant. Chez Velvet Moments, nous considérons chaque union comme un chef-d'œuvre en devenir. De la recherche du lieu idéal à l'organisation de la réception, en passant par la sélection des prestataires et la coordination le jour J, nous prenons en charge chaque aspect pour que vous puissiez vous concentrer pleinement sur l'essentiel : vivre chaque instant.",
    includes: [
      "Recherche et sélection du lieu de réception",
      "Coordination complète le jour J",
      "Décoration florale et scénographie personnalisées",
      "Sélection et gestion des prestataires (traiteur, photographe, musique)",
      "Organisation de la cérémonie civile ou religieuse",
      "Gestion des invitations et plan de table",
      "Animations et surprises sur mesure",
      "Coordination de la lune de miel",
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80',
    ],
    color: 'from-rose/60 to-rose/20',
  },
  {
    id: 'diners-prives',
    title: 'Dîners privés',
    icon: '🍽️',
    tagline: "La gastronomie au service de l'émotion",
    description:
      "Un dîner privé organisé par Velvet Moments, c'est bien plus qu'un repas — c'est une expérience sensorielle totale. Nous créons des tables d'exception dans des lieux d'exception, où chaque convive se sent l'invité d'honneur. Art de la table raffiné, cuisine étoilée, ambiance musicale sur mesure : chaque élément est pensé pour créer une soirée dont vos invités se souviendront longtemps.",
    includes: [
      "Sélection du lieu (manoir, villa, loft d'exception, restaurant privatisé)",
      "Création du menu avec chef étoilé ou chef privé",
      "Art de la table haut de gamme (porcelaine, cristal, argenterie)",
      "Décoration florale et mise en scène de la salle",
      "Service en salle de niveau palace",
      "Sélection et accord des vins avec sommelier",
      "Animation musicale (quartet à cordes, jazz, piano)",
      "Photographie et vidéo de l'événement",
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=500&q=80',
      'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=500&q=80',
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80',
    ],
    color: 'from-amber-900/40 to-amber-900/10',
  },
  {
    id: 'dejeuners-affaires',
    title: "Déjeuners d'affaires",
    icon: '🤝',
    tagline: "L'excellence au service de vos relations professionnelles",
    description:
      "Dans le monde des affaires, les impressions se forgent souvent autour d'une table. Un déjeuner d'affaires orchestré par Velvet Moments est une démonstration tangible de votre exigence et de votre attention portée aux détails. Nous créons des environnements propices aux échanges fructueux, où confort, discrétion et excellence se conjuguent naturellement.",
    includes: [
      "Sélection du restaurant ou du lieu privatisé adapté",
      "Coordination logistique et accueil personnalisé",
      "Menu raffiné adapté à vos contraintes (régimes, allergies)",
      "Configuration de la salle selon vos besoins (présentation, réunion)",
      "Équipements audiovisuels si nécessaire",
      "Service discret et professionnel",
      "Gestion de la confidentialité",
      "Assistance d'un chef de projet dédié",
    ],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80',
    ],
    color: 'from-slate-800/40 to-slate-800/10',
  },
  {
    id: 'fetes-anniversaires',
    title: 'Fêtes & Anniversaires',
    icon: '🥂',
    tagline: "Célébrez avec éclat chaque étape précieuse de la vie",
    description:
      "Chaque anniversaire, chaque fête mérite d'être gravé dans les mémoires. Que vous souhaitiez une soirée intimiste entre proches ou une fête fastueuse pour plusieurs centaines de personnes, Velvet Moments crée une expérience parfaitement adaptée à votre vision. Notre créativité et notre rigueur organisationnelle garantissent une fête dont vous et vos proches parleront pendant des années.",
    includes: [
      "Concept et thème de la soirée sur mesure",
      "Recherche et privatisation du lieu idéal",
      "Décoration scénographique personnalisée",
      "Traiteur et cocktails haut de gamme",
      "Animation et surprises (artistes, DJ, ambiance live)",
      "Photographie et vidéo professionnelle",
      "Cadeaux et souvenirs personnalisés pour les invités",
      "Coordination complète le soir de la fête",
    ],
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80',
      'https://images.unsplash.com/photo-1524673278499-0d399e05b40a?w=500&q=80',
    ],
    color: 'from-purple-900/30 to-purple-900/10',
  },
  {
    id: 'evenements-corporate',
    title: 'Événements corporate',
    icon: '🏛️',
    tagline: "Portez votre image d'entreprise au plus haut niveau",
    description:
      "Votre événement d'entreprise est le reflet de vos valeurs et de votre culture. Séminaires de direction, lancements de produits, galas annuels, conventions commerciales — Velvet Moments conçoit des événements professionnels qui marquent les esprits et renforcent les liens. Notre expertise du milieu corporate garantit une exécution irréprochable, de la conception à l'évaluation post-événement.",
    includes: [
      "Stratégie événementielle alignée avec vos objectifs",
      "Gestion complète de la logistique (transport, hébergement)",
      "Location de salles de conférence et espaces événementiels premium",
      "Équipements techniques (son, lumière, vidéo, traduction simultanée)",
      "Team building et activités sur mesure",
      "Traiteur corporate haut de gamme",
      "Communication événementielle (invitations, site dédié, app mobile)",
      "Rapport et analyse post-événement",
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=80',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&q=80',
    ],
    color: 'from-noir/60 to-noir/20',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Nos Prestations"
        subtitle="Une expertise sur mesure pour chaque occasion"
        backgroundImage="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85"
        overlay="bg-noir/60"
      />

      {/* Intro */}
      <section className="py-20 bg-ivoire">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Notre engagement</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-noir mb-6 leading-tight">
              Chaque prestation, une promesse d'excellence
            </h2>
            <div className="w-12 h-px bg-or mx-auto mb-8" />
            <p className="font-lato text-base text-noir/60 leading-relaxed">
              Qu'il s'agisse de l'événement le plus intime ou du gala le plus grandiose, notre
              approche reste la même : écoute, créativité et perfection dans l'exécution. Chaque
              prestation est pensée comme une expérience unique, façonnée autour de vos désirs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services detail */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-ivoire'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Image side */}
              <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                  </div>
                  {/* Mini gallery */}
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {service.gallery.map((img, gi) => (
                      <div key={gi} className="relative h-24 overflow-hidden">
                        <Image src={img} alt={`${service.title} ${gi + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Text side */}
              <AnimatedSection
                direction={i % 2 === 0 ? 'right' : 'left'}
                delay={0.15}
                className={i % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-3">
                  Prestation
                </p>
                <h2 className="font-playfair text-4xl md:text-5xl text-noir mb-3 leading-tight">
                  {service.title}
                </h2>
                <p className="font-cormorant text-xl text-noir/55 italic mb-6">{service.tagline}</p>
                <div className="w-12 h-px bg-or mb-8" />

                <p className="font-lato text-sm text-noir/65 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="mb-10">
                  <p className="font-lato text-xs tracking-widest uppercase text-noir/40 mb-4">
                    Inclus dans la prestation
                  </p>
                  <ul className="space-y-2.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-or mt-0.5 shrink-0">—</span>
                        <span className="font-lato text-sm text-noir/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-or text-white font-lato text-xs tracking-widest uppercase hover:bg-noir transition-colors duration-300"
                >
                  Demander un devis
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 bg-noir text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Votre vision, notre expertise</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="font-lato text-sm text-white/55 leading-relaxed mb-10">
              Nos prestations ne se limitent pas à cette liste. Chaque événement est unique et
              nous sommes toujours prêts à concevoir des expériences sur mesure pour vos projets
              les plus ambitieux.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 border border-or text-or font-lato text-xs tracking-widest uppercase hover:bg-or hover:text-white transition-all duration-300"
            >
              Discutons de votre projet
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
