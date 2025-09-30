import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutHero } from '@/components/sections/about-hero';
import { OurStory } from '@/components/sections/our-story';
import { MissionVision } from '@/components/sections/mission-vision';

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
