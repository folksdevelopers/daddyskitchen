import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductsHero } from '@/components/sections/products-hero';
import { ProductList } from '@/components/sections/product-list';
import { Collections } from '@/components/sections/collections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products',
  description: 'Explore the full range of authentic Kerala spices, masalas, flours, and rices from Daddy\'s Kitchen. Discover premium quality ingredients for your kitchen.',
};

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <ProductsHero />
        <Collections />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
