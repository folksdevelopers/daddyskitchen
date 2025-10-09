'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { heroSlides } from '@/lib/placeholder-data';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function Hero() {
  const images = PlaceHolderImages;

  return (
    <section className="relative w-full bg-background overflow-hidden">
      <div className="container mx-auto flex min-h-[80vh] max-h-[800px] min-h-[600px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-1 space-y-6 z-10">
          <h1 
            className="font-headline text-6xl font-bold tracking-tight text-accent md:text-7xl lg:text-8xl animate-slide-in-left"
            style={{ animationDelay: '0.1s' }}
          >
            Paradise,
            <br />
            of Spices!
          </h1>
          <p 
            className="max-w-md text-lg text-muted-foreground animate-slide-in-left"
            style={{ animationDelay: '0.3s' }}
          >
            Authentic Kerala spices delivered worldwide. Premium quality masalas crafted with traditional recipes for modern kitchens.
          </p>
          <div 
            className="animate-slide-in-left"
            style={{ animationDelay: '0.5s' }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/products">
                  View Products
              </Link>
            </Button>
          </div>
        </div>
        <div 
            className="relative hidden md:flex flex-1 items-center justify-center h-full animate-slide-in-right"
            style={{ animationDelay: '0.3s' }}
        >
          <Carousel
            className="w-full max-w-lg"
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent>
              {heroSlides.map((slide) => {
                const image = images.find(img => img.id === slide.imageId);
                return (
                  <CarouselItem key={slide.id}>
                    <div className="relative w-full h-[550px]">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-contain"
                          priority
                        />
                      )}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
