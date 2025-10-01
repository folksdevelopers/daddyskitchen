
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
import { CollectionArc } from '../collection-arc';

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
                    Best Delivered <br /> <span className='text-primary'>Categories</span>
                </h2>
            </div>
            <div>
                 <p className="text-muted-foreground">
                    Here Are Some Of Our Best Distributed Categories. If You Want You Can Order From Here.Here Are Some Of Our Best Distributed Categories. If You Want You Can Order From Here.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => {
            const image = images.find(img => img.id === collection.imageId);
            return (
              <Card key={collection.name} className="group flex flex-col overflow-hidden rounded-2xl shadow-none border-none bg-transparent text-center h-full">
                  <CardHeader className="p-0 relative flex-1 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <CollectionArc className="w-full h-full text-primary" />
                    </div>
                     <div className="relative h-48 w-48">
                        {image && (
                          <Image
                            src="/Frame.png"
                            alt={collection.name}
                            data-ai-hint="spice bottle"
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-2xl font-bold text-foreground">{collection.name}</CardTitle>
                  </CardContent>
                  <CardFooter className="flex justify-center p-6 pt-0">
                    <Link href="/products" className="flex items-center text-accent font-semibold group">
                        Order Now
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
