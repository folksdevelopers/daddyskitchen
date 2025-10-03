'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const featuredProducts = [
    { id: '1', name: 'Turmeric Powder', slug: 'turmeric-powder', description: 'Pure ground turmeric made from high-quality dried turmeric rhizomes. Known for its rich color, earthy flavor, and medicinal properties.', imageUrl: '/turmeric-powder.jpg' },
    { id: '2', name: 'Idiyappam Powder', slug: 'idiyappam-powder', description: 'Finely milled roasted rice flour mix, specially prepared for making soft, stringy and authentic South Indian idiyappam.', imageUrl: '/idiyappam-powder.jpg' },
    { id: '3', name: 'Green Gram (Moong Dal)', slug: 'green-gram', description: 'Naturally grown whole green gram packed with protein, fiber, and essential nutrients. Suitable for curries, sprouts, and soups.', imageUrl: '/green-gram.jpg' },
    { id: '4', name: 'Idiyappam Powder', slug: 'idiyappam-powder-3', description: 'A ready mix for making soft and stringy idiyappam.', imageUrl: '/idiyappam-powder-3.jpg' },
];

export function Products() {
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
                <CardHeader className="p-6">
                  <div className="relative h-56 w-full">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      data-ai-hint={product.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6 pt-0">
                  <CardTitle className="font-headline text-2xl font-bold">{product.name}</CardTitle>
                  <div className="mt-2 flex justify-center items-center gap-1">
                    <span className="w-3 h-1 bg-muted rounded-full"></span>
                    <span className="w-3 h-1 bg-muted rounded-full"></span>
                    <span className="w-3 h-1 bg-muted rounded-full"></span>
                  </div>
                  <CardDescription className="mt-4 text-base text-muted-foreground">{product.description}</CardDescription>
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
