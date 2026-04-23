import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    "Parcourez la galerie de Velvet Moments : mariages, dîners privés, fêtes et événements corporate capturés dans leur plus belle lumière.",
}

const images = [
  // Mariages
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Mariage romantique', category: 'Mariages' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', alt: 'Cérémonie de mariage', category: 'Mariages' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', alt: 'Bouquet de mariée', category: 'Mariages' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', alt: 'Couple de mariés', category: 'Mariages' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', alt: 'Réception de mariage', category: 'Mariages' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', alt: 'Décoration de mariage', category: 'Mariages' },

  // Dîners
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Table gastronomique', category: 'Dîners' },
  { src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80', alt: 'Dîner privé élégant', category: 'Dîners' },
  { src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80', alt: 'Art de la table', category: 'Dîners' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', alt: 'Table dressée', category: 'Dîners' },
  { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80', alt: 'Gastronomie fine', category: 'Dîners' },

  // Fêtes
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80', alt: 'Fête privée', category: 'Fêtes' },
  { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80', alt: 'Célébration festive', category: 'Fêtes' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Ambiance fête', category: 'Fêtes' },
  { src: 'https://images.unsplash.com/photo-1524673278499-0d399e05b40a?w=800&q=80', alt: 'Anniversaire luxueux', category: 'Fêtes' },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', alt: 'Soirée festive', category: 'Fêtes' },

  // Corporate
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', alt: 'Gala d\'entreprise', category: 'Corporate' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', alt: 'Conférence corporate', category: 'Corporate' },
  { src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80', alt: 'Séminaire d\'entreprise', category: 'Corporate' },
  { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80', alt: 'Événement professionnel', category: 'Corporate' },
  { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80', alt: 'Cocktail d\'affaires', category: 'Corporate' },
]

export default function GaleriePage() {
  return (
    <>
      <Hero
        title="Notre Galerie"
        subtitle="Des instants précieux capturés dans leur splendeur"
        backgroundImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=85"
        overlay="bg-noir/55"
      />

      <section className="py-24 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">
              Nos réalisations
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-noir mb-4 leading-tight">
              Chaque image raconte une histoire
            </h2>
            <div className="w-12 h-px bg-or mx-auto mb-6" />
            <p className="font-lato text-sm text-noir/55 max-w-xl mx-auto leading-relaxed">
              Parcourez notre galerie et laissez-vous inspirer par les événements que nous avons
              eu le privilège d'orchestrer. Filtrez par catégorie pour trouver votre source d'inspiration.
            </p>
          </AnimatedSection>

          <Gallery images={images} showFilters />
        </div>
      </section>
    </>
  )
}
