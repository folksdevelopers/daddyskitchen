
import { socialFeed, videoTestimonial } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Facebook, Instagram, Twitter, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const iconMap = {
  twitter: <Twitter className="h-6 w-6 text-white fill-sky-500" />,
  instagram: <Instagram className="h-6 w-6 text-white" />,
  facebook: <Facebook className="h-6 w-6 text-white fill-blue-600" />,
};

export function Testimonials() {
  const images = PlaceHolderImages;
  const videoImage = images.find(img => img.id === videoTestimonial.imageId);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Testimonials</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-accent">
            Taste the real Spice of Kerala
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-x-8 gap-y-12 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {socialFeed.map((item) => {
                const image = images.find(img => img.id === item.imageId);
                const Icon = iconMap[item.platform];
                
                if (item.platform === 'instagram' && image) {
                  return (
                    <div key={item.id} className="relative pt-6">
                        <div className="absolute top-0 left-4 w-12 h-12 rounded-full flex items-center justify-center bg-card shadow-md z-10">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500`}>
                                {Icon}
                            </div>
                        </div>
                        <div className="rounded-2xl bg-card p-4 pt-10 shadow-lg flex flex-col">
                            <div className="relative h-64 w-full rounded-lg overflow-hidden">
                                <Image
                                src={image.imageUrl}
                                alt={image.description}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-muted-foreground">{item.text.replace(/#\w+/g, (tag) => `<span class="text-blue-500">${tag}</span>`).replace(/@\w+/g, '')}</p>
                                <p className="font-bold text-lg text-primary">@{item.author}</p>
                            </div>
                        </div>
                    </div>
                  )
                }

                return (
                <div key={item.id} className="relative pt-6">
                    <div className="absolute top-0 left-4 w-12 h-12 rounded-full flex items-center justify-center bg-card shadow-md">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' : item.platform === 'twitter' ? 'bg-sky-500' : 'bg-blue-600'}`}>
                            {Icon}
                        </div>
                    </div>
                    <div className="rounded-2xl bg-card p-6 pt-10 shadow-lg flex flex-col justify-between min-h-[150px]">
                        <div>
                            <p className="font-bold text-lg text-primary">@{item.author}</p>
                            <p className="mt-2 text-muted-foreground">{item.text}</p>
                        </div>
                        {image && (
                        <div className="relative mt-4 h-48 w-full rounded-lg overflow-hidden">
                            <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover"
                            />
                        </div>
                        )}
                    </div>
                </div>
                );
            })}
          </div>
          <div className="rounded-2xl bg-card shadow-lg overflow-hidden relative group aspect-square">
              {videoImage && (
              <Image
                  src={videoImage.imageUrl}
                  alt={videoImage.description}
                  data-ai-hint={videoImage.imageHint}
                  fill
                  className="object-cover"
              />
              )}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <PlayCircle className="h-24 w-24 text-white/80 transform transition-transform group-hover:scale-110" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
