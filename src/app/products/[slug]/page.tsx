'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductDetails } from '@/components/sections/product-details';
import { RelatedProducts } from '@/components/sections/related-products';
import { allProducts } from '@/lib/placeholder-data';
import type { Product } from '@/lib/placeholder-data';

export default function SingleProductPage({ params }: { params: { slug: string } }) {
  console.log('--- Product Page Log ---');
  console.log('Received slug from URL:', params.slug);

  const product = allProducts.find(p => p.slug === params.slug);
  console.log('Found product:', product);

  if (!product) {
    const allSlugs = allProducts.map(p => p.slug);
    console.error(`Product with slug '${params.slug}' not found. Available slugs are:`, allSlugs);
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
