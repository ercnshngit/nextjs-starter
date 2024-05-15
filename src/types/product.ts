import { createProductFormSchema } from "@/forms/product";
import { z } from "zod";

export interface GetProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type CreateProductResponse = {
  id: number;
};

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

export type CreateProductForm = z.infer<typeof createProductFormSchema>;
