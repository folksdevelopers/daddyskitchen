'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { heroSlides } from '@/lib/placeholder-data';
import Link from 'next/link';

export function Hero() {
  const images = PlaceHolderImages;
  const image1 = images.find(img => img.id === heroSlides[0]?.imageId);
  const image2 = images.find(img => img.id === heroSlides[1]?.imageId);
  const image3 = images.find(img => img.id === heroSlides[2]?.imageId);

  return (
    <section className="relative w-full bg-background overflow-hidden">
      <div className="container mx-auto flex min-h-[80vh] max-h-[800px] min-h-[600px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-1 space-y-6 z-10">
          <h1 className="font-headline text-6xl font-bold tracking-tight text-accent md:text-7xl lg:text-8xl">
            Paradise,
            <br />
            of Spices!
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Authentic Kerala spices delivered worldwide. Premium quality masalas crafted with traditional recipes for modern kitchens.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/products">
                View Products
            </Link>
          </Button>
        </div>
        <div className="relative hidden flex-1 lg:flex items-center justify-center h-full">
            <div className='absolute w-[500px] h-[300px] bg-primary/20 blur-3xl rounded-full' />
            <div className="relative w-full h-full">
              {image1 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] floating-1">
                  <Image
                    src={image1.imageUrl}
                    alt={image1.description}
                    data-ai-hint={image1.imageHint}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
              {image2 && (
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] floating-2">
                   <Image
                    src={image2.imageUrl}
                    alt={image2.description}
                    data-ai-hint={image2.imageHint}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {image3 && (
                 <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] floating-3">
                   <Image
                    src={image3.imageUrl}
                    alt={image3.description}
                    data-ai-hint={image3.imageHint}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
        </div>
      </div>
    </section>
  );
}
