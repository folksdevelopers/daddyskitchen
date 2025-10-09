'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().optional(),
  city: z.string().optional(),
  message: z.string().min(1, 'Message is required.'),
});

export async function sendContactMessage(prevState: any, formData: FormData) {
  const parsed = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    city: formData.get('city'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    let errorMessage = 'There was an error with your submission:\n';
    parsed.error.issues.forEach(issue => {
        errorMessage += `- ${issue.path[0]}: ${issue.message}\n`;
    });
    return { message: errorMessage, status: 'error' };
  }

  const { name, email, phone, city, message } = parsed.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailTo = process.env.EMAIL_TO;

  if (!emailTo) {
    console.error('EMAIL_TO environment variable is not set.');
    return { message: 'Server configuration error. Please try again later.', status: 'error' };
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Required for Resend's sandbox. In production, use your verified domain.
      to: emailTo,
      subject: `New Contact Message from ${name}`,
      html: `
        <p>You received a new message from your website's contact form:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
          ${city ? `<li><strong>City:</strong> ${city}</li>` : ''}
        </ul>
        <h2>Message:</h2>
        <p>${message}</p>
      `,
    });

    return { message: 'Your message has been sent successfully!', status: 'success' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: 'There was an error sending your message. Please try again.', status: 'error' };
  }
}
