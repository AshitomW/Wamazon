export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface PageProps {
  searchParams: Promise<{
    q?: string;
    sortBy?: keyof Product;
    order?: "asc" | "desc";
    skip?: string;
    [key: string]: string | string[] | undefined;
  }>;
}
