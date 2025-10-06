import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CategoryProductList } from '@/components/sections/category-product-list';
import { allProducts } from '@/lib/placeholder-data';
import type { Metadata } from 'next';

function capitalize(s: string) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: { params: { categoryName: string } }): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.categoryName);
  const capitalizedCategoryName = capitalize(categoryName);

  return {
    title: `${capitalizedCategoryName} Products - Daddy's Kitchen Masala`,
    description: `Browse our collection of high-quality ${categoryName}. Authentic flavors from Kerala, delivered to your kitchen.`,
  };
}


export default function CategoryPage({ params }: { params: { categoryName: string } }) {
  const categoryName = decodeURIComponent(params.categoryName);
  const products = allProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
  const capitalizedCategoryName = capitalize(categoryName);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{capitalizedCategoryName}</h1>
              <p className="mt-2 text-lg font-semibold text-accent">Taste the real Spice of Kerala</p>
            </div>
          </div>
        </section>
        <CategoryProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}
