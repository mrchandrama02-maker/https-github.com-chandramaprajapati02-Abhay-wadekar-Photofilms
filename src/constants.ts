import { Service, PortfolioItem, Testimonial } from './types';

export const BRAND_NAME = 'Abhay Wadekar Photofilms';
export const PHONE_NUMBER = '+91 83298 18157';
export const EMAIL = 'abhaywadekarphotofilms@gmail.com';
export const INSTAGRAM_HANDLE = '@abhay_wadekar_photofilms';
export const INSTAGRAM_URL = 'https://www.instagram.com/abhay_wadekar_photofilms/';

export const SERVICES: Service[] = [
  {
    id: 'wedding-photo',
    title: 'Wedding Photography',
    description: 'Timeless imagery capturing the soul of your celebration with elegance and precision.',
    icon: 'Camera',
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Shoots',
    description: 'Conceptual and cinematic stories of your love in breathtaking locations.',
    icon: 'Heart',
  },
  {
    id: 'cinematic-films',
    title: 'Cinematic Wedding Films',
    description: 'High-end storytelling films that make your wedding feel like a big-screen masterpiece.',
    icon: 'Video',
  },
  {
    id: 'drone-coverage',
    title: 'Drone Coverage',
    description: 'Aerial perspectives that add a grand, cinematic scale to your wedding visuals.',
    icon: 'Plane',
  },
  {
    id: 'portraits',
    title: 'Couple Portraits',
    description: 'Intimate and artistic portrait sessions capturing the raw chemistry between you.',
    icon: 'User',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    category: 'Weddings',
    title: 'Rohit & Amruta - Heritage Legacy',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '2',
    category: 'Couple Shoots',
    title: 'Daiwat & Dipali - Pure Emotion',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '3',
    category: 'Cinematic Films',
    title: 'Eternal Vows - The Highlight',
    imageUrl: 'https://images.unsplash.com/photo-1492691523567-307300298ff9?auto=format&fit=crop&q=80&w=1600',
    videoUrl: '#',
  },
  {
    id: '4',
    category: 'Weddings',
    title: 'Traditional Splendor',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '5',
    category: 'Weddings',
    title: 'The Haldi Ritual',
    imageUrl: 'https://images.unsplash.com/photo-1519225495810-7512332145a5?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '6',
    category: 'Pre-Wedding',
    title: 'Whispers in the Field',
    imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '7',
    category: 'Weddings',
    title: 'The Bride\'s Reflection',
    imageUrl: 'https://images.unsplash.com/photo-1510076857177-74700760be49?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '8',
    category: 'Cinematic Films',
    title: 'Art in Details',
    imageUrl: 'https://images.unsplash.com/photo-1465495910483-0d674b0797f8?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '9',
    category: 'Couple Shoots',
    title: 'Soulful Glances',
    imageUrl: 'https://images.unsplash.com/photo-1522673607200-164483eeeea5?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '10',
    category: 'Cinematic Films',
    title: 'The Promise',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '11',
    category: 'Weddings',
    title: 'Cinematic Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '12',
    category: 'Couple Shoots',
    title: 'Innocence & Joy',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: '13',
    category: 'Weddings',
    title: 'Saket & Sayali - Marathi Traditional Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=1600', // Temporary placeholder - replace with /wedding_custom_1.jpg once uploaded
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sneha & Rohan',
    role: 'Wedding Clients',
    content: 'Abhay and his team didn\'t just take photos; they captured the emotions we felt. Every time we see our film, we are moved to tears. A truly cinematic experience!',
  },
  {
    id: '2',
    name: 'Vikram Mehta',
    role: 'Groom',
    content: 'The level of creative direction and professional equipment they brought was outstanding. They made us feel like celebrities on our big day.',
  },
  {
    id: '3',
    name: 'Priyanka Shah',
    role: 'Bride',
    content: 'Their attention to detail and storytelling approach is what sets them apart. Best decision we made for our wedding in Chhatrapati Sambhajinagar!',
  },
];
