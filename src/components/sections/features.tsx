import { Leaf, Globe, Package } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: '100% Natural',
    description: 'We source the finest Kerala spices grown using sustainable, natural farming methods, with no artificial colors, additives, or preservatives.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Ethically Sourced',
    description: 'Our spices are responsibly procured directly from small-holder farmers in Kerala under fair-trade principles, ensuring both quality and community welfare.',
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: 'Packed with Care',
    description: 'Each spice blend is freshly milled and carefully sealed under strict hygiene standards to lock in maximum aroma, flavor, and nutritional value.',
  },
];

export function Features() {
  return (
    <section id="features" className="bg-secondary/50 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
