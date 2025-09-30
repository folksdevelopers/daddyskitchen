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
          <div className="relative h-64 w-full max-w-4xl lg:h-80">
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
            DaddysKitchen is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}
