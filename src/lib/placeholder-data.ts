export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: 'Spices' | 'Blends' | 'Salts' | 'Herbs';
  imageId: string;
  price: number;
};

export const allProducts: Product[] = [
  { id: '1', name: 'Turmeric Powder', slug: 'turmeric-powder', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Spices', imageId: 'featured-coriander', price: 5.99 },
  { id: '2', name: 'Idiyappam Powder', slug: 'idiyappam-powder', description: 'A ready mix for making soft and stringy idiyappam.', category: 'Blends', imageId: 'featured-chaat', price: 6.99 },
  { id: '3', name: 'Green Gram', slug: 'green-gram', description: 'A healthy and versatile lentil for various dishes.', category: 'Herbs', imageId: 'featured-tikka', price: 4.99 },
  { id: '4', name: 'Idiyappam Powder', slug: 'idiyappam-powder-2', description: 'A ready mix for making soft and stringy idiyappam.', category: 'Blends', imageId: 'featured-vegetable', price: 6.99 },
  { id: '5', name: 'Chaat Masala', slug: 'chaat-masala', description: 'A flavorful Indian spice blend for snacks.', category: 'Blends', imageId: 'featured-chaat', price: 7.99 },
  { id: '6', name: 'Coriander Powder', slug: 'coriander-powder', description: 'A versatile ground spice for various dishes.', category: 'Spices', imageId: 'featured-coriander', price: 5.49 },
  { id: '7', name: 'Tikka Masala', slug: 'tikka-masala', description: 'A classic blend for creamy, spiced curry.', category: 'Blends', imageId: 'featured-tikka', price: 8.99 },
  { id: '8', name: 'Vegetable Masala', slug: 'vegetable-masala', description: 'An aromatic mix for vegetable-based meals.', category: 'Blends', imageId: 'featured-vegetable', price: 7.49 },
  { id: '9', name: 'Turmeric Powder', slug: 'turmeric-powder-2', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Spices', imageId: 'featured-coriander', price: 5.99 },
  { id: '10', name: 'Idiyappam Powder', slug: 'idiyappam-powder-3', description: 'A ready mix for making soft and stringy idiyappam.', category: 'Blends', imageId: 'featured-chaat', price: 6.99 },
  { id: '11', name: 'Green Gram', slug: 'green-gram-2', description: 'A healthy and versatile lentil for various dishes.', category: 'Herbs', imageId: 'featured-tikka', price: 4.99 },
  { id: '12', name: 'Idiyappam Powder', slug: 'idiyappam-powder-4', description: 'A ready mix for making soft and stringy idiyappam.', category: 'Blends', imageId: 'featured-vegetable', price: 6.99 },
  { id: '13', name: 'Chaat Masala', slug: 'chaat-masala-2', description: 'A flavorful Indian spice blend for snacks.', category: 'Blends', imageId: 'featured-chaat', price: 7.99 },
  { id: '14', name: 'Coriander Powder', slug: 'coriander-powder-2', description: 'A versatile ground spice for various dishes.', category: 'Spices', imageId: 'featured-coriander', price: 5.49 },
  { id: '15', name: 'Tikka Masala', slug: 'tikka-masala-2', description: 'A classic blend for creamy, spiced curry.', category: 'Blends', imageId: 'featured-tikka', price: 8.99 },
  { id: '16', name: 'Vegetable Masala', slug: 'vegetable-masala-2', description: 'An aromatic mix for vegetable-based meals.', category: 'Blends', imageId: 'featured-vegetable', price: 7.49 },
];


export type FeaturedProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageId: string;
};

export const featuredProducts: FeaturedProduct[] = [
    { id: '1', name: 'Turmeric Powder', slug: 'turmeric-powder', description: 'Turmeric is the spice that gives curry its yellow color', imageId: 'featured-coriander' },
    { id: '2', name: 'Idiyappam Powder', slug: 'idiyappam-powder', description: 'Turmeric is the spice that gives curry its yellow color', imageId: 'featured-chaat' },
    { id: '3', name: 'Green Gram', slug: 'green-gram', description: 'Turmeric is the spice that gives curry its yellow color', imageId: 'featured-tikka' },
    { id: '4', name: 'Idiyappam Powder', slug: 'idiyappam-powder-2', description: 'Turmeric is the spice that gives curry its yellow color', imageId: 'featured-vegetable' },
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
  id:string;
  imageId: string;
};

export const heroSlides: HeroSlide[] = [
    { id: '1', imageId: 'hero-bottle-1' },
    { id: '2', imageId: 'hero-bottle-2' },
    { id: '3', imageId: 'hero-bottle-3' },
];
