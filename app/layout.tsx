import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Velvet Moments — Organisation d'événements d'exception",
    template: '%s | Velvet Moments',
  },
  description:
    "Velvet Moments, spécialiste de l'organisation d'événements premium à Paris : mariages, dîners privés, déjeuners d'affaires, fêtes et événements corporate. Chaque instant mérite d'être inoubliable.",
  keywords: [
    'organisation événements', 'mariage Paris', 'dîner privé',
    'événement corporate', 'traiteur luxe', 'réception élégante',
  ],
  authors: [{ name: 'Velvet Moments' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://velvet-moments.fr',
    siteName: 'Velvet Moments',
    title: "Velvet Moments — Organisation d'événements d'exception",
    description: "Chaque instant mérite d'être inoubliable.",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "Velvet Moments - Organisation d'événements",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Velvet Moments — Organisation d'événements d'exception",
    description: "Chaque instant mérite d'être inoubliable.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${cormorant.variable} ${lato.variable}`}
    >
      <body className="font-lato bg-ivoire text-noir antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
