import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

export default function ProductForm({
  form,
  onSubmit,
}: {
  form: any;
  onSubmit: any;
}) {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Başlık</FormLabel>
              <FormControl>
                <Input placeholder="Başlık girin" {...field} />
              </FormControl>
              <FormDescription>Açıklama</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
