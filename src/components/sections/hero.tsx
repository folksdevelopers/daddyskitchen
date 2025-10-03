'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Button } from '../ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { heroSlides } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const images = PlaceHolderImages;

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto flex h-[80vh] max-h-[800px] min-h-[600px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-1 space-y-6">
          <h1 className="font-headline text-6xl font-bold tracking-tight text-accent md:text-7xl lg:text-8xl">
            Paradise,
            <br />
            of Spices!
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Authentic Kerala spices delivered worldwide. Premium quality masalas crafted with traditional recipes for modern kitchens.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View Products
          </Button>
        </div>
        <div className="relative hidden flex-1 lg:flex items-center justify-center">
            <div className='absolute w-[500px] h-[300px] bg-primary/20 blur-3xl rounded-full -z-0' />
            <Carousel 
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                className="group relative w-[550px]"
            >
                <CarouselContent>
                {heroSlides.map((slide, index) => {
                    const image = images.find(img => img.id === slide.imageId);
                    return (
                    <CarouselItem key={index}>
                        <div className="relative h-[550px] w-full">
                        {image && (
                            <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-contain"
                            priority={index === 0}
                            />
                        )}
                        </div>
                    </CarouselItem>
                    );
                })}
                </CarouselContent>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                    <div className="flex items-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <CarouselPrevious className="relative -left-0 translate-y-0 transform text-primary bg-primary/10 hover:bg-primary/20 border-primary/20" />
                        <CarouselNext className="relative -right-0 translate-y-0 transform text-primary bg-primary/10 hover:bg-primary/20 border-primary/20" />
                    </div>
                </div>
            </Carousel>
        </div>
      </div>
    </section>
  );
}
