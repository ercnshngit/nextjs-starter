import Card from "@/components/ui/card";
import { Product } from "@/types/product";
import React from "react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </Card>
  );
}
