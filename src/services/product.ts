import { GetProductsResponse } from "@/types/product";
import { get } from "@/utils/fetcher";

export const getProducts = async () => {
  const data = await get<GetProductsResponse>("/products");

  // Introduce delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return data;
};
