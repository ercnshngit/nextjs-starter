import {
  CreateProductForm,
  CreateProductResponse,
  GetProductsResponse,
} from "@/types/product";
import { get, post } from "@/utils/fetcher";

export const getProducts = async () => {
  const data = await get<GetProductsResponse>("/products");

  // Introduce delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return data;
};

export const createProduct = async (product: CreateProductForm) => {
  const data = await post<CreateProductResponse>("/products/add", product);

  // Introduce delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return data;
};
