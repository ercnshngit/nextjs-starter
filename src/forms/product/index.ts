import { z } from "zod";

export const createProductFormSchema = z.object({
  title: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3)
    .max(255),
});
