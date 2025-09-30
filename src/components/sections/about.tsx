import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import { Leaf } from 'lucide-react';

export function About() {
  const image = PlaceHolderImages.find(img => img.id === 'about-us');

  return (
    <section id="about" className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
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
          <div className="text-center lg:text-left">
            <p className="font-semibold text-primary">Our Story</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">From Our Kitchen to Yours</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Spice Paradise was born from a love of authentic flavors and a passion for cooking. We travel the globe to source the finest, single-origin spices, ensuring every jar is packed with freshness and aroma. Our mission is to inspire creativity in the kitchen and bring people together through the joy of food.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                <Leaf className="h-6 w-6 text-primary" />
                <p className="font-semibold">100% Organic & Ethically Sourced</p>
            </div>
            <Button size="lg" className="mt-8">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
