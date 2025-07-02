// pages/api/contact.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { name, phone, email, message } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'INTEKA <noreply@inteka.pl>', // replace with verified domain
            to: ['dan.ryzhokhin@gmail.com'], // replace with your destination email
            subject: `New Quote Request from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return res.status(200).json({ success: true, data });
    } catch (err) {
        console.error('Resend error:', err);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}