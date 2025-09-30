'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

const categories = ['Spices', 'Blends', 'Salts', 'Herbs'];

export function Products() {
  const images = PlaceHolderImages;

  return (
    <section id="products" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Signature Spices</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our curated selection of high-quality, ethically sourced spices from around the world.
          </p>
        </div>

        <Tabs defaultValue="Spices" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 sm:w-auto sm:mx-auto sm:grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => {
                    const image = images.find(img => img.id === product.imageId);
                    return (
                      <Card key={product.id} className="group flex flex-col overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                        <CardHeader className="p-0">
                          <div className="relative h-56 w-full">
                            {image && (
                              <Image
                                src={image.imageUrl}
                                alt={image.description}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 p-6">
                           <CardTitle className="font-headline text-xl font-semibold">{product.name}</CardTitle>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between p-6 pt-0">
                          <p className="text-lg font-bold text-primary">{product.price}</p>
                          <Button size="icon" variant="outline">
                            <Plus className="h-5 w-5"/>
                            <span className="sr-only">Add to cart</span>
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
