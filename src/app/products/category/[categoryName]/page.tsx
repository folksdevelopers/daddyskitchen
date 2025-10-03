
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CategoryProductList } from '@/components/sections/category-product-list';
import { allProducts } from '@/lib/placeholder-data';
import { Collections } from '@/components/sections/collections';

export default function CategoryPage({ params }: { params: { categoryName: string } }) {
  const categoryName = decodeURIComponent(params.categoryName);
  const products = allProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{categoryName}</h1>
              <p className="mt-2 text-lg font-semibold text-accent">Taste the real Spice of Kerala</p>
            </div>
          </div>
        </section>
        <Collections />
        <CategoryProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}
