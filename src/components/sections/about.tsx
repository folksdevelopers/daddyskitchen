
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const image = PlaceHolderImages.find(img => img.id === 'about-us');

  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="relative h-64 lg:h-[400px] w-full">
                    {image && (
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                    />
                    )}
                </div>
                <div className="p-8 lg:p-12">
                    <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About Us</h2>
                    <p className="mt-2 text-lg font-semibold text-accent">Taste the Real Spice of Kerala</p>
                    <p className="mt-6 text-base leading-7 text-muted-foreground">
                        Daddy’s Kitchen Masala is a premier Indian spice company with a mission to bring the authentic flavors of Kerala’s spice heritage to kitchens worldwide.
                    </p>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        We source the finest spices directly from Kerala’s lush gardens and craft each blend using traditional, time-honored recipes. Our commitment to purity, freshness, and genuine flavor has earned the trust of over 15,000 satisfied customers. Experience the true taste of home with every meal.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
