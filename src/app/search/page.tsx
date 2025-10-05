'use client';

import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CategoryProductList } from '@/components/sections/category-product-list';
import { allProducts } from '@/lib/placeholder-data';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  
  const products = query 
    ? allProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      ) 
    : [];

  return (
    <>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {query ? `Search Results for "${query}"` : 'Search'}
            </h1>
            {products.length > 0 && (
                <p className="mt-2 text-lg font-semibold text-accent">
                    Found {products.length} product{products.length === 1 ? '' : 's'}
                </p>
            )}
          </div>
        </div>
      </section>
      <CategoryProductList products={products} />
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <Suspense fallback={<div className="text-center py-12">Loading search results...</div>}>
          <SearchResults />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
