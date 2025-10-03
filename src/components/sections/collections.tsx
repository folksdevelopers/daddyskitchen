'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-12">
            <div className='pb-4'>
                 <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    <span className="block">Our Product</span>
                    <span className="block text-primary">Categories</span>
                </h2>
            </div>
            <div>
                 <p className="text-muted-foreground">
                    Discover our finest selection of premium Kerala spices and ingredients, meticulously crafted to bring authentic Indian flavors to your kitchen. Sourced directly from the rich spice gardens of Kerala, each ingredient captures the region’s unique aroma and potency, elevating traditional dishes with fresh, timeless flavors.
                </p>
                 <p className="text-muted-foreground mt-4">
                    Explore our most popular categories, designed to suit every culinary need—from bold single spices to expertly blended masalas. Whether it’s for home cooking or professional kitchens, find your favorites and immerse yourself in the true taste of Kerala’s spice heritage.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => {
            const image = images.find(img => img.id === collection.imageId);
            return (
              <Card key={collection.name} className="group flex flex-col overflow-hidden rounded-2xl shadow-none border-none bg-transparent text-center h-full">
                  <CardHeader className="p-0 relative flex-1 flex items-center justify-center">
                    {image && (
                      <div className="w-full aspect-[2/3] relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={image.imageUrl}
                          alt={collection.name}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6 pb-0 flex-grow pt-8">
                    <CardTitle className="font-headline text-2xl font-bold text-foreground">{collection.name}</CardTitle>
                  </CardContent>
                  <CardFooter className="flex justify-center p-6 pt-4">
                    <Link href="/products" className="flex items-center text-accent font-semibold group">
                        View Product
                        <ChevronRight className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
