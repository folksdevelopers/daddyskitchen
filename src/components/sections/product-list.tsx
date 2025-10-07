
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
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';
import Link from 'next/link';
import { useState, useRef } from 'react';

export function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const sectionRef = useRef<HTMLElement>(null);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, totalProducts);
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handlePageChange(currentPage - 1);
  }

  const handleNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handlePageChange(currentPage + 1);
  }
  
  const handlePageLinkClick = (page: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handlePageChange(page);
  };

  return (
    <section ref={sectionRef} className="py-12 bg-secondary/30 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center mb-8">
          <p className="text-muted-foreground">Showing {startIndex + 1}–{endIndex} of {totalProducts} results</p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {currentProducts.map((product) => {
            return (
              <Card key={product.id} className="group flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
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
        
        {totalPages > 1 && (
            <Pagination className='mt-12'>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={handlePrev} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink href="#" isActive={currentPage === i + 1} onClick={handlePageLinkClick(i + 1)}>
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext href="#" onClick={handleNext} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        )}

      </div>
    </section>
  );
}
