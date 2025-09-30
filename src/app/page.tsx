import { About } from '@/components/sections/about';
import { Features } from '@/components/sections/features';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Newsletter } from '@/components/sections/newsletter';
import { Products } from '@/components/sections/products';
import { RecipeGenerator } from '@/components/sections/recipe-generator';
import { Testimonials } from '@/components/sections/testimonials';
import { WhyChooseUs } from '@/components/sections/why-choose-us';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <WhyChooseUs />
        <Products />
        <Testimonials />
        <RecipeGenerator />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
