import { products } from "@prisma/client";


export type Product = products;

export type ProductTableItem = Pick<
  Product,
  "id" | "name" | "price" | "weight" | "stock" | "image_url" | "description"
>;

export interface ProductsResponse {
  products: Product[];
  total: number;
  error: string | null;
}

export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  weight: number;
  stock: number;
  image?: File;
}

export type UpdateProductDto = Partial<CreateProductDto> & {
  id: number;
};

  export interface ProductFormData {
  name: string;
  weight: number;
  price: number;
  stock: number;
  description: string;
}

export interface ProductDetailItem {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  price: number;
  stock: number;
  weight: number | null;
}