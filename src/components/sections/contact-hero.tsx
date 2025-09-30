import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ContactHero() {
  const image = PlaceHolderImages.find(img => img.id === 'contact-map');
  if (!image) return null;

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Keep in Touch with Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're talking about Spices, of course – and we've got a bouquet of spices for yourself or someone you love.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative h-64 w-full max-w-5xl lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
