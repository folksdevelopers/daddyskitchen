'use client';

import Image from 'next/image';
import type { Product } from '@/lib/placeholder-data';
import { StarIcon } from '../icons/star-icon';
import { Button } from '../ui/button';
import { Award, Leaf, ShieldBan } from 'lucide-react';
import Link from 'next/link';

const assurances = [
  { icon: <Award className="h-8 w-8" />, text: 'High Quality' },
  { icon: <Leaf className="h-8 w-8" />, text: '100% Organic' },
  { icon: <ShieldBan className="h-8 w-8" />, text: 'No Chemicals' },
];

export function ProductDetails({ product }: { product: Product }) {

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-card shadow-lg overflow-hidden p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            <div className="relative h-80 lg:h-[500px] w-full flex items-center justify-center lg:order-last">
                <div className='absolute w-full max-w-md h-full bg-primary/10 blur-3xl rounded-full -z-0' />
              <Image
                src={product.imageUrl}
                alt={product.name}
                data-ai-hint={product.name}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            
            <div className='lg:order-first'>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">{product.name}</h1>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5" />
                    ))}
                </div>
              </div>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                {product.description}
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary">Our Assurance</h3>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  {assurances.map((assurance, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {assurance.icon}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{assurance.text}</p>
                    </div>
                  ))}
                </div>
              </div>

               <div className="mt-8">
                <h3 className="text-xl font-bold text-primary">Available Weights</h3>
                <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4">
                  {product.weights.map((weight) => (
                    <div
                      key={weight}
                      className="rounded-full px-4 sm:px-6 py-2 bg-secondary text-secondary-foreground text-sm"
                    >
                      {weight}
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-10 sm:px-12 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                 <Link href="/contact">
                    Enquire Now
                 </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
