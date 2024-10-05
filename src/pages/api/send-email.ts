import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Configura el transporte del correo
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // smtp.gmail.com
      port: Number(process.env.EMAIL_PORT), // 465
      secure: true, // true para el puerto 465
      auth: {
        user: process.env.GMAIL_USER, // Tu dirección de Gmail
        pass: process.env.GMAIL_PASS, // Tu contraseña de Gmail o App Password
      },
    })

    console.log(transporter)

    // Configura el contenido del correo
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'jhonjaider100015@gmail.com',
      subject: 'Notificación desde mi portafolio',
      html: `
      <b>Nombres:</b> ${name}<br/>
      <b>Correo:</b> ${email}<br/>
      <b>Mensaje:</b> ${message}<br/>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Correo enviado exitosamente' })
    } catch (error) {
      console.error('Error al enviar el correo:', error)
      res.status(500).json({ message: 'Error al enviar el correo' })
    }
  } else {
    // Maneja el método GET
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Método ${req.method} no permitido`)
  }
}
