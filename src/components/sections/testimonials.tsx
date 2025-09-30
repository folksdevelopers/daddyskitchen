'use client';

import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonials } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { StarIcon } from '../icons/star-icon';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">What Our Customers Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We're proud to have delighted food lovers all over the world.
            </p>
        </div>
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="mt-12 w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="h-full flex flex-col justify-between p-6 shadow-lg">
                    <CardContent className="p-0">
                       <Quote className="h-8 w-8 text-primary/30 mb-4" />
                       <p className="text-lg text-foreground/80 italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="mt-6 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.id}`} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
