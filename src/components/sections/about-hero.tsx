import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutHero() {
  const image = PlaceHolderImages.find(img => img.id === 'about-us-hero');
  if (!image) return null;

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About US</h1>
          <p className="mt-2 text-lg font-semibold text-accent">Taste the real Spice of Kerala</p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative h-80 w-full max-w-4xl lg:h-[500px]">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-base leading-7 text-muted-foreground">
            At Daddy's Kitchen, we bring the authentic flavors of Kerala's spice heritage directly to your kitchen. Our journey began with a passion for preserving traditional recipes and a commitment to sourcing the finest, purest spices from the lush gardens of Kerala. We believe that great food starts with great ingredients, which is why we meticulously select, grind, and blend our spices to capture their natural aroma and flavor. Join us in celebrating a legacy of taste that has been cherished for generations.
          </p>
        </div>
      </div>
    </section>
  );
}
