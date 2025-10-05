
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { allProducts } from '@/lib/placeholder-data';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Products() {
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <section id="products" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Featured Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-accent">
            Taste the real Spice of Kerala
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => {
            return (
              <Card key={product.id} className="group flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl text-center">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      data-ai-hint={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6 pt-6">
                  <CardTitle className="font-headline text-2xl font-bold">{product.name}</CardTitle>
                  <div className="mt-2 flex justify-center items-center gap-1">
                    <span className="w-3 h-1 bg-muted rounded-full"></span>
                    <span className="w-3 h-1 bg-muted rounded-full"></span>
                    <span className="w-3 h-1 bg-muted rounded-full"></span>
                  </div>
                  <CardDescription className="mt-4 text-base text-muted-foreground">{product.minDescription}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center p-6 pt-0">
                  <Button asChild size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full px-8">
                    <Link href={`/products/${product.slug}`}>
                      Check Out
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
