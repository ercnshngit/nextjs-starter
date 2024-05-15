import { Product } from "@/types/product";
import React from "react";
import ProductCard from "../product-card";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col gap-4">
      {!products && <div>Urun bulunamadi</div>}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
