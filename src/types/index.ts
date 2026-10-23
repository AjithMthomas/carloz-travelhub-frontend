export interface Destination {
  id: string;
  name: string;
  malayalamName?: string;
  tagline: string;
  category: 'waterfall' | 'mountain' | 'lake' | 'heritage' | 'viewpoint';
  image: string;
  description: string;
  highlights: string[];
  bestTime: string;
  altitude?: string;
  idealDuration: string;
  location: string;
}

export interface Experience {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  vibe: string;
  bestFor: string;
  features: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  duration: string;
  route: string;
  priceNote: string;
  badge?: string;
  isPopular?: boolean;
  image: string;
  inclusions: string[];
  highlights: string[];
  idealFor: string;
}

export interface TripEnquiryData {
  name: string;
  phone: string;
  tripType: string;
  travellerCount: string;
  duration: string;
  travelDate: string;
  destinations: string[];
  specialRequests: string;
  preferredContact: '6238813608' | '8157845547';
}

export interface InstagramPost {
  id: string;
  title: string;
  caption: string;
  image: string;
  likes: string;
  location: string;
  type: 'reel' | 'photo';
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'vehicle' | 'customization' | 'safety';
}
