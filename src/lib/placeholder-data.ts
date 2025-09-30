export type Product = {
  id: string;
  name: string;
  description: string;
  category: 'Spices' | 'Blends' | 'Salts' | 'Herbs';
  imageId: string;
};

export const allProducts: Product[] = [
  { id: '1', name: 'Turmeric Powder', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Spices', imageId: 'featured-coriander' },
  { id: '2', name: 'Idiyappam Powder', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Blends', imageId: 'featured-chaat' },
  { id: '3', name: 'Green Gram', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Herbs', imageId: 'featured-tikka' },
  { id: '4', name: 'Idiyappam Powder', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Blends', imageId: 'featured-vegetable' },
  { id: '5', name: 'Chaat Masala', description: 'A flavorful Indian spice blend for snacks.', category: 'Blends', imageId: 'featured-chaat' },
  { id: '6', name: 'Coriander Powder', description: 'A versatile ground spice for various dishes.', category: 'Spices', imageId: 'featured-coriander' },
  { id: '7', name: 'Tikka Masala', description: 'A classic blend for creamy, spiced curry.', category: 'Blends', imageId: 'featured-tikka' },
  { id: '8', name: 'Vegetable Masala', description: 'An aromatic mix for vegetable-based meals.', category: 'Blends', imageId: 'featured-vegetable' },
  { id: '9', name: 'Turmeric Powder', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Spices', imageId: 'featured-coriander' },
  { id: '10', name: 'Idiyappam Powder', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Blends', imageId: 'featured-chaat' },
  { id: '11', name: 'Green Gram', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Herbs', imageId: 'featured-tikka' },
  { id: '12', name: 'Idiyappam Powder', description: 'Turmeric is the spice that gives curry its yellow color', category: 'Blends', imageId: 'featured-vegetable' },
  { id: '13', name: 'Chaat Masala', description: 'A flavorful Indian spice blend for snacks.', category: 'Blends', imageId: 'featured-chaat' },
  { id: '14', name: 'Coriander Powder', description: 'A versatile ground spice for various dishes.', category: 'Spices', imageId: 'featured-coriander' },
  { id: '15', name: 'Tikka Masala', description: 'A classic blend for creamy, spiced curry.', category: 'Blends', imageId: 'featured-tikka' },
  { id: '16', name: 'Vegetable Masala', description: 'An aromatic mix for vegetable-based meals.', category: 'Blends', imageId: 'featured-vegetable' },
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
