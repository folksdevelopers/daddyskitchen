import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductsHero } from '@/components/sections/products-hero';
import { ProductList } from '@/components/sections/product-list';

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <ProductsHero />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
