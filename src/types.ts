export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  tags: string[];
  description: string;
  fullDetails: string[];
  aftercareNote: string;
  image: string;
  popular?: boolean;
}

export interface EnquiryRecord {
  id: string;
  timestamp: string;
  serviceName: string;
  customerName: string;
  customerPhone: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  technician: string;
  status: 'New' | 'Confirmed' | 'Pending';
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  source: 'Google Business' | 'Facebook';
  text: string;
  highlightTag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Lash Health' | 'Booking & Pricing' | 'Aftercare' | 'Microblading';
}
