'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const schema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  telephone: z.string().optional(),
  typeEvenement: z.string().min(1, "Veuillez sélectionner un type d'événement"),
  dateEvenement: z.string().optional(),
  nbConvives: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type FormData = z.infer<typeof schema>

const eventTypes = [
  'Mariage',
  'Dîner privé',
  "Déjeuner d'affaires",
  'Fête & Anniversaire',
  'Événement corporate',
  'Autre',
]

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="mt-1.5 font-lato text-xs text-red-500">{msg}</p>
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block font-lato text-[0.65rem] tracking-widest uppercase text-noir/55 mb-2">
      {children}
    </label>
  )
}

const inputClass =
  'w-full px-4 py-3 border border-noir/20 bg-transparent font-lato text-sm text-noir placeholder:text-noir/30 outline-none focus:border-or transition-colors duration-200'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Erreur envoi')
      router.push('/contact/confirmation')
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Nom *</Label>
          <input {...register('nom')} className={inputClass} placeholder="Dupont" />
          <FieldError msg={errors.nom?.message} />
        </div>
        <div>
          <Label>Prénom *</Label>
          <input {...register('prenom')} className={inputClass} placeholder="Marie" />
          <FieldError msg={errors.prenom?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Email *</Label>
          <input {...register('email')} type="email" className={inputClass} placeholder="marie@exemple.fr" />
          <FieldError msg={errors.email?.message} />
        </div>
        <div>
          <Label>Téléphone</Label>
          <input {...register('telephone')} type="tel" className={inputClass} placeholder="+33 6 00 00 00 00" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Type d'événement *</Label>
          <select
            {...register('typeEvenement')}
            className={`${inputClass} bg-ivoire cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>Sélectionner...</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <FieldError msg={errors.typeEvenement?.message} />
        </div>
        <div>
          <Label>Date souhaitée</Label>
          <input {...register('dateEvenement')} type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <Label>Nombre de convives</Label>
        <input
          {...register('nbConvives')}
          type="number"
          min="1"
          className={inputClass}
          placeholder="Ex : 80"
        />
      </div>

      <div>
        <Label>Votre message *</Label>
        <textarea
          {...register('message')}
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="Décrivez votre événement idéal : le lieu rêvé, l'ambiance souhaitée, vos envies particulières..."
        />
        <FieldError msg={errors.message?.message} />
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="px-12 py-4 bg-or text-white font-lato text-xs tracking-widest uppercase hover:bg-noir transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
        </button>
      </div>
    </form>
  )
}
