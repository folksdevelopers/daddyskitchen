import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductDetails } from '@/components/sections/product-details';
import { RelatedProducts } from '@/components/sections/related-products';
import { allProducts } from '@/lib/placeholder-data';
import type { Product } from '@/lib/placeholder-data';

export default function SingleProductPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
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