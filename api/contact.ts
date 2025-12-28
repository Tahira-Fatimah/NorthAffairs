import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail'
import { z } from 'zod';

export const contactRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

console.log(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_FROM_EMAIL);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse and validate body
    const { name, email, message } = contactRequestSchema.parse(req.body);

    const msg = {
      to: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com', // Recipient email
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com', // Verified sender
      subject: `New Contact Form Submission from ${name}`,
      text: `
        You have received a new message from your contact form:
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await sgMail.send(msg);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err: any) {
    console.error('Error sending email:', err);
    res.status(400).json({ error: err.message || 'Failed to send email' });
  }
}

