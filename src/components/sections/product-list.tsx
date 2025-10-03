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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';
import Link from 'next/link';

export function ProductList() {
  const images = PlaceHolderImages;

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <p className="text-muted-foreground">Showing 1–12 of 16 results</p>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px] bg-card border-none shadow-md">
                <SelectValue placeholder="Sort By Latest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Sort By Latest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className='bg-card border-none shadow-md'>
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.slice(0, 12).map((product) => {
            const image = images.find(img => img.id === product.imageId);
            return (
              <Card key={product.id} className="group flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl text-center">
                <CardHeader className="p-6">
                  <div className="relative h-56 w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
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
        <Pagination className='mt-12'>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                 <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}