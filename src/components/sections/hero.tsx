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
    <section className="w-full">
      <Carousel 
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        className="group relative"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => {
            const image = images.find(img => img.id === slide.imageId);
            return (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] min-h-[400px] w-full lg:h-[80vh]">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                       <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
                        {slide.title}
                      </h1>
                      <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90 md:text-xl">
                        {slide.subtitle}
                      </p>
                      <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                        Explore Collection
                        <ArrowRight className="ml-2 h-5 w-5"/>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <div className="flex items-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <CarouselPrevious className="relative -left-0 translate-y-0 transform text-white bg-white/10 hover:bg-white/20 border-white/20" />
            <CarouselNext className="relative -right-0 translate-y-0 transform text-white bg-white/10 hover:bg-white/20 border-white/20" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
