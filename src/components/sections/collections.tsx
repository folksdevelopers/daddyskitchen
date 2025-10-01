
'use client';

import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    name: 'Spices',
    imageId: 'collection-spices',
  },
  {
    name: 'Masala',
    imageId: 'collection-masala',
  },
  {
    name: 'Flours',
    imageId: 'collection-flours',
  },
  {
    name: 'Rices',
    imageId: 'collection-rices',
  }
];

export function Collections() {
  const images = PlaceHolderImages;

  return (
    <section id="collections" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Product Collections</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-accent">
            Explore our curated collections of premium spices and ingredients.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => {
            const image = images.find(img => img.id === collection.imageId);
            return (
              <Link href="/products" key={collection.name} legacyBehavior>
                <a className="group block">
                  <Card className="overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl text-center h-full">
                    <CardContent className="p-0 relative h-full">
                      <div className="relative h-80 w-full">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h3 className="font-headline text-3xl font-bold text-white">{collection.name}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
