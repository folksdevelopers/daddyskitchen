import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactHero } from '@/components/sections/contact-hero';
import { ContactFormSection } from '@/components/sections/contact-form-section';

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
