export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  freeShipping: boolean;
  condition: 'new' | 'used';
  soldCount?: number;
  installments?: {
    count: number;
    amount: number;
    noInterest: boolean;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}
