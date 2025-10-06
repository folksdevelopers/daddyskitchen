import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactHero } from '@/components/sections/contact-hero';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Daddy's Kitchen Masala",
  description: "Get in touch with Daddy's Kitchen Masala. Whether you have a question, feedback, or a business inquiry, we'd love to hear from you. Find our address, phone, and email.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <ContactHero />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
