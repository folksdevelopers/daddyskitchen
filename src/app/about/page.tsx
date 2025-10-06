import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutHero } from '@/components/sections/about-hero';
import { OurStory } from '@/components/sections/our-story';
import { MissionVision } from '@/components/sections/mission-vision';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Daddy's Kitchen Masala",
  description: "Learn about Daddy's Kitchen's journey, from our passion for authentic Kerala spices to our commitment to quality and tradition. Discover our story and mission.",
};


export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
      </main>
      <Footer />
    </div>
  );
}
