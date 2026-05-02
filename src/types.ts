export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  category: 'Weddings' | 'Pre-Wedding' | 'Couple Shoots' | 'Cinematic Films';
  title: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl?: string;
}
