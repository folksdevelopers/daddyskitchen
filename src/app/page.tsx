import { About } from '@/components/sections/about';
import { Collections } from '@/components/sections/collections';
import { Features } from '@/components/sections/features';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Products } from '@/components/sections/products';
import { Testimonials } from '@/components/sections/testimonials';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Daddy's Kitchen Masala - Paradise of Spices!",
};


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <WhyChooseUs />
        <Collections />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
