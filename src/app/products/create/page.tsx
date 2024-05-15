"use client";
import { createProductFormSchema } from "@/forms/product";

import ProductForm from "@/components/products/product-form";
import useCreate from "@/hooks/use-create";
import { createProduct } from "@/services/product";
import { CreateProductForm } from "@/types/product";
export default function CreateProduct() {
  const { onSubmit, form } = useCreate<CreateProductForm>({
    formSchema: createProductFormSchema,
    mutationKey: "create-product",
    mutationFn: createProduct,
  });

  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-bold">Create Product</h1>
      <ProductForm form={form} onSubmit={onSubmit} />
    </div>
  );
}
