"use client";
import ProductList from "@/components/products/product-list";
import { getProducts } from "@/services/product";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function ProductsPage() {
  const { data, error } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <ProductList products={data?.data?.products} />
    </div>
  );
}
