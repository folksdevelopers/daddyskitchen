'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductDetails } from '@/components/sections/product-details';
import { RelatedProducts } from '@/components/sections/related-products';
import { allProducts, Product } from '@/lib/placeholder-data';
import type { Metadata } from 'next';
import { useEffect } from 'react';

// This function would typically be used with generateStaticParams,
// but for this client-side example we will handle metadata dynamically.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = allProducts.find(p => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for could not be found.',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default function SingleProductPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find(p => p.slug === params.slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - Daddy's Kitchen Masala`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center text-center">
          <div>
            <h1 className="text-2xl font-bold">Product not found</h1>
            <p className="mt-2 text-muted-foreground">
              We couldn't find a product with the slug: <code className="bg-muted px-2 py-1 rounded">/{params.slug}</code>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);


  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <ProductDetails product={product} />
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
}
