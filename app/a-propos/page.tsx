import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import AnimatedSection from '@/components/AnimatedSection'
import CounterSection from '@/components/CounterSection'

export const metadata: Metadata = {
  title: 'À Propos',
  description:
    "Découvrez l'histoire de Velvet Moments, notre équipe passionnée et les valeurs qui guident notre travail depuis plus de 12 ans.",
}

const team = [
  {
    name: 'Élise Fontaine',
    role: 'Fondatrice & Directrice artistique',
    bio: "Ancienne scénographe de théâtre, Élise a fondé Velvet Moments en 2012 avec la conviction que chaque événement mérite une mise en scène digne des plus grandes productions. Sa vision artistique et son exigence esthétique définissent l'ADN de la maison.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Marc Delacroix',
    role: 'Directeur des opérations',
    bio: "Fort de 15 années dans l'hôtellerie de luxe, Marc apporte à l'équipe une rigueur opérationnelle et une culture du service d'exception. Il coordonne chaque prestation avec une précision millimétrée pour garantir une exécution sans faille.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Camille Laurent',
    role: 'Responsable Mariages',
    bio: "Passionnée par les histoires d'amour et les moments précieux, Camille accompagne les futurs mariés avec une empathie et une créativité rares. Elle transforme chaque rêve en réalité, avec une attention particulière pour les détails qui font toute la différence.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    name: 'Antoine Mercier',
    role: 'Chef de projet Corporate',
    bio: "Diplômé d'HEC Paris et passionné de logistique événementielle, Antoine orchestre nos événements corporate avec une efficacité remarquable. Il comprend les enjeux business de ses clients et crée des événements qui servent stratégiquement leurs objectifs.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]

const values = [
  {
    icon: '✦',
    title: 'Excellence sans compromis',
    description: "Nous n'acceptons que le meilleur. Chaque prestataire est soigneusement sélectionné, chaque détail minutieusement vérifié. L'excellence n'est pas une option, c'est notre standard.",
  },
  {
    icon: '◆',
    title: 'Écoute & personnalisation',
    description: "Chaque client est unique. Nous prenons le temps d'écouter, de comprendre et de nous imprégner de votre vision avant de proposer la moindre idée. Votre événement vous ressemble.",
  },
  {
    icon: '●',
    title: 'Discrétion & confiance',
    description: "La confiance est le fondement de notre relation. Qu'il s'agisse d'un événement privé ou professionnel, la discrétion absolue est notre engagement envers chacun de nos clients.",
  },
  {
    icon: '◈',
    title: 'Créativité & innovation',
    description: "Nous repoussons constamment les limites de la créativité pour proposer des expériences originales et mémorables. Chaque événement est l'opportunité de créer quelque chose d'unique.",
  },
]

export default function AProposPage() {
  return (
    <>
      <Hero
        title="Notre Maison"
        subtitle="Une passion transmise, une excellence cultivée"
        backgroundImage="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1920&q=85"
        overlay="bg-noir/60"
      />

      {/* Story */}
      <section className="py-28 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Notre histoire</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-noir mb-6 leading-tight">
                Née d'une passion<br />pour le beau
              </h2>
              <div className="w-12 h-px bg-or mb-8" />
              <div className="space-y-5 font-lato text-sm text-noir/65 leading-relaxed">
                <p>
                  Velvet Moments est née en 2012 de la rencontre entre la vision artistique d'Élise
                  Fontaine et l'exigence opérationnelle de Marc Delacroix. Unis par une même conviction —
                  que les moments précieux méritent une attention hors du commun — ils ont fondé une maison
                  qui a rapidement su s'imposer comme une référence dans l'événementiel de luxe.
                </p>
                <p>
                  Inspiré par l'art de vivre français, le velours dans ses nuances les plus riches et la
                  fluidité des moments qui s'étirent avec grâce, le nom "Velvet Moments" incarne parfaitement
                  notre philosophie : créer des instants d'une douceur et d'une richesse absolues.
                </p>
                <p>
                  Aujourd'hui, notre équipe de passionnés a orchestré plus de 250 événements d'exception
                  à Paris et dans les plus beaux domaines de France. Des mariages de conte de fées aux galas
                  corporate les plus prestigieux, chaque prestation porte la signature inimitable de notre
                  maison : l'alliance du beau, du bien et de l'inoubliable.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative grid grid-cols-2 gap-3">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
                    alt="Velvet Moments mariage"
                    fill className="object-cover"
                  />
                </div>
                <div className="relative h-72 mt-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                    alt="Velvet Moments dîner"
                    fill className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
                    alt="Velvet Moments corporate"
                    fill className="object-cover"
                  />
                </div>
                <div className="relative h-48 -mt-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80"
                    alt="Velvet Moments fête"
                    fill className="object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats animated */}
      <CounterSection />

      {/* Team */}
      <section className="py-28 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Les visages de Velvet</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-noir mb-4 leading-tight">Notre équipe</h2>
            <div className="w-12 h-px bg-or mx-auto mb-6" />
            <p className="font-lato text-sm text-noir/55 max-w-xl mx-auto">
              Des professionnels passionnés, unis par l'amour du beau et l'obsession du détail.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group">
                  <div className="relative h-80 overflow-hidden mb-5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-playfair text-lg text-noir mb-1">{member.name}</h3>
                  <p className="font-lato text-xs tracking-wider uppercase text-or mb-3">{member.role}</p>
                  <p className="font-lato text-sm text-noir/55 leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-noir">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Ce qui nous anime</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4 leading-tight">Nos valeurs</h2>
            <div className="w-12 h-px bg-or mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border border-white/10 p-10 group hover:border-or/40 transition-colors duration-300">
                  <span className="text-or text-2xl block mb-4">{v.icon}</span>
                  <h3 className="font-playfair text-xl text-white mb-4">{v.title}</h3>
                  <p className="font-lato text-sm text-white/55 leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-rose/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-cormorant text-xs tracking-[0.5em] uppercase text-or mb-4">Travaillons ensemble</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-noir mb-6">
              Prêt à créer quelque chose d'exceptionnel ?
            </h2>
            <p className="font-lato text-sm text-noir/60 leading-relaxed mb-10">
              Chaque grand événement commence par une conversation. Contactez-nous et laissez-nous
              vous montrer comment nous pouvons transformer votre vision en réalité.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-or text-white font-lato text-xs tracking-widest uppercase hover:bg-noir transition-colors duration-300"
            >
              Prendre contact
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
