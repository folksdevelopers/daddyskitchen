import { socialFeed, videoTestimonial } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Facebook, Instagram, Twitter, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const iconMap = {
  twitter: <Twitter className="h-8 w-8 text-white fill-sky-500" />,
  instagram: <Instagram className="h-8 w-8 text-white" />,
  facebook: <Facebook className="h-8 w-8 text-white fill-blue-600" />,
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
            What our customers are saying
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-8 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {socialFeed.map((item) => {
                const image = images.find(img => img.id === item.imageId);
                const Icon = iconMap[item.platform];
                return (
                <div
                    key={item.id}
                    className="rounded-2xl bg-card p-6 shadow-lg flex flex-col justify-between"
                >
                    <div>
                    <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' : 'bg-card'}`}>
                        {Icon}
                        </div>
                        <p className="font-bold text-lg">@{item.author}</p>
                    </div>
                    <p className="mt-4 text-muted-foreground">{item.text}</p>
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
                );
            })}
          </div>
          <div className="lg:sticky lg:top-24">
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
      </div>
    </section>
  );
}
