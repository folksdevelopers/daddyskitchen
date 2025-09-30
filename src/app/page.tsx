import { About } from '@/components/sections/about';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Newsletter } from '@/components/sections/newsletter';
import { Products } from '@/components/sections/products';
import { RecipeGenerator } from '@/components/sections/recipe-generator';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <RecipeGenerator />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
