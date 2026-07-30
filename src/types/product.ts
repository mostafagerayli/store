import { products } from "@prisma/client";


export type Product = products;


export type ProductTableItem = Pick<
  Product,
  | "id"
  | "name"
  | "price_per_kg"
  | "stock_gram"
  | "image_url"
  | "description"
  | "slug"
>;


export interface ProductsResponse {
  products: Product[];
  total: number;
  error: string | null;
}


export interface CreateProductDto {
  name: string;
  description?: string;
  price_per_kg: number;
  stock: number; // کیلو (برای فرم ادمین)
  image?: File;
}


export type UpdateProductDto = Partial<CreateProductDto> & {
  id: number;
};


export interface ProductFormData {
  name: string;
  price_per_kg: number;
  stock: number; // کیلو
  description: string;
}


export interface ProductDetailItem {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;

  price_per_kg: number;
  stock_gram: number;
}