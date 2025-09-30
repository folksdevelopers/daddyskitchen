export type Product = {
  id: string;
  name: string;
  price: string;
  category: 'Spices' | 'Blends' | 'Salts' | 'Herbs';
  imageId: string;
};

export const products: Product[] = [
  { id: '1', name: 'Smoked Paprika', price: '$7.50', category: 'Spices', imageId: 'product-paprika' },
  { id: '2', name: 'Saffron Threads', price: '$15.00', category: 'Spices', imageId: 'product-saffron' },
  { id: '3', name: 'Madras Curry Blend', price: '$9.00', category: 'Blends', imageId: 'product-curry-blend' },
  { id: '4', name: 'Zesty Taco Blend', price: '$8.50', category: 'Blends', imageId: 'product-taco-blend' },
  { id: '5', name: 'Pink Himalayan Salt', price: '$6.00', category: 'Salts', imageId: 'product-himalayan-salt' },
  { id: '6', name: 'Applewood Smoked Salt', price: '$7.00', category: 'Salts', imageId: 'product-smoked-salt' },
  { id: '7', name: 'Dried Rosemary', price: '$5.50', category: 'Herbs', imageId: 'product-rosemary' },
  { id: '8', name: 'Greek Oregano', price: '$5.00', category: 'Herbs', imageId: 'product-oregano' },
];

export type FeaturedProduct = {
  id: string;
  name: string;
  description: string;
  imageId: string;
};

export const featuredProducts: FeaturedProduct[] = [
    { id: '1', name: 'Turmeric Powder', description: 'Turmeric is the spice that gives curry its yellow color', imageId: 'featured-coriander' },
    { id: '2', name: 'Idiyappam Powder', description: 'Turmeric is the spice that gives curry its yellow color', imageId: 'featured-chaat' },
    { id: '3', name: 'Green Gram', description: 'Turmeric is the spice that gives curry its yellow color', imageId: 'featured-tikka' },
    { id: '4', name: 'Idiyappam Powder', description: 'Turmeric is the spice that gives curry its yellow color', imageId: 'featured-vegetable' },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "The quality of spices from Spice Paradise is unmatched. My cooking has been elevated to a whole new level!",
        name: 'Elena Rodriguez',
        title: 'Home Chef',
        rating: 5,
    },
    {
        id: '2',
        quote: "I love the unique blends. The Madras Curry is my absolute favorite. Fast shipping and beautiful packaging too.",
        name: 'David Chen',
        title: 'Food Blogger',
        rating: 5,
    },
    {
        id: '3',
        quote: "As a professional chef, I rely on the best ingredients. Spice Paradise delivers consistency and flavor every time.",
        name: 'Aisha Jalloh',
        title: 'Restaurant Owner',
        rating: 5,
    },
    {
        id: '4',
        quote: "The AI recipe generator is a game changer! I never know what to do with leftover ingredients, and it gives me amazing ideas.",
        name: 'Marcus Holloway',
        title: 'Busy Parent',
        rating: 5,
    }
];

export type SocialFeedItem = {
  id: string;
  platform: 'twitter' | 'instagram' | 'facebook';
  author: string;
  text: string;
  imageId?: string;
};

export const socialFeed: SocialFeedItem[] = [
  {
    id: '1',
    platform: 'twitter',
    author: 'faizal',
    text: 'i prefer @daddyskitchen curry masala.',
  },
  {
    id: '2',
    platform: 'twitter',
    author: 'faizal',
    text: 'i prefer @daddyskitchen curry masala.',
  },
  {
    id: '3',
    platform: 'instagram',
    author: 'daddyskitchen',
    text: 'Chicken Curry #thursday @daddyskitchen',
    imageId: 'testimonial-ig-1',
  },
  {
    id: '4',
    platform: 'facebook',
    author: 'daddyskitchen',
    text: 'Sambar #sunday @daddyskitchen',
    imageId: 'testimonial-fb-1',
  },
   {
    id: '5',
    platform: 'facebook',
    author: 'daddyskitchen',
    text: 'Chicken Curry #thursday @daddyskitchen',
  },
];

export type VideoTestimonial = {
  id: string;
  imageId: string;
}

export const videoTestimonial: VideoTestimonial = {
  id: '1',
  imageId: 'testimonial-video',
};


export type HeroSlide = {
  id: string;
  imageId: string;
};

export const heroSlides: HeroSlide[] = [
    { id: '1', imageId: 'hero-bottle-1' },
    { id: '2', imageId: 'hero-bottle-2' },
    { id: '3', imageId: 'hero-bottle-3' },
];
