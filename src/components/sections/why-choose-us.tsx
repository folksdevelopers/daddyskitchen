import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const organicFeatures = [
    {
        title: '100% Organic',
        description: 'Organic food is food produced by methods complying with the standards of organic farming.',
    },
    {
        title: '100% Organic',
        description: 'Organic food is food produced by methods complying with the standards of organic farming.',
    },
    {
        title: '100% Organic',
        description: 'Organic food is food produced by methods complying with the standards of organic farming.',
    },
];

export function WhyChooseUs() {
  const image = PlaceHolderImages.find(img => img.id === 'quality-features');
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {organicFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                     <div className="h-12 w-12 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-80 lg:h-[500px] w-full">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-contain"
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
