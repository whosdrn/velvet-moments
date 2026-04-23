import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nom, prenom, email, telephone, typeEvenement, dateEvenement, nbConvives, message } = body

    const { error } = await resend.emails.send({
      from: 'Velvet Moments <onboarding@resend.dev>',
      to: ['velvetmoments.fr@gmail.com'],
      replyTo: email,
      subject: `Nouvelle demande — ${typeEvenement} — ${prenom} ${nom}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #0a0a0a;">
          <div style="border-bottom: 1px solid #c9a96e; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="font-size: 28px; font-weight: bold; letter-spacing: 4px; margin: 0;">VELVET</h1>
            <p style="font-size: 11px; letter-spacing: 6px; color: #c9a96e; margin: 4px 0 0; text-transform: uppercase;">Moments</p>
          </div>

          <h2 style="font-size: 20px; color: #c9a96e; margin-bottom: 24px;">Nouvelle demande de contact</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #888; width: 40%;">Nom complet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 14px;">${prenom} ${nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #888;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 14px;"><a href="mailto:${email}" style="color: #c9a96e;">${email}</a></td>
            </tr>
            ${telephone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #888;">Téléphone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 14px;">${telephone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #888;">Type d'événement</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 14px; font-weight: bold; color: #c9a96e;">${typeEvenement}</td>
            </tr>
            ${dateEvenement ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #888;">Date souhaitée</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 14px;">${dateEvenement}</td>
            </tr>` : ''}
            ${nbConvives ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #888;">Nombre de convives</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0e6e6; font-size: 14px;">${nbConvives}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 30px;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #888; margin-bottom: 12px;">Message</p>
            <div style="background: #faf8f5; padding: 20px; border-left: 3px solid #c9a96e; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #f0e6e6; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background: #c9a96e; color: white; text-decoration: none; font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
              Répondre à ${prenom}
            </a>
          </div>

          <p style="font-size: 11px; color: #aaa; text-align: center; margin-top: 30px;">
            © Velvet Moments — 182 Route de l'Étang la Ville, 78750 Mareil-Marly
          </p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
