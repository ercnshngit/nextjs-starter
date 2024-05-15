import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

export default function useCreate<T>({
  formSchema,
  mutationKey,
  mutationFn,
  mutationProps,
}: {
  formSchema: any;
  mutationKey: string;
  mutationFn: any;
  mutationProps?: any;
}) {
  const { toast } = useToast();

  const form = useForm<T>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const createMutation = useMutation({
    mutationKey: mutationKey,
    mutationFn: mutationFn,
    onSuccess: () => {
      toast({
        title: "Product created",
        description: "Product has been created successfully",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to create product",
        description: error.message,
        variant: "destructive",
      });
    },
    ...mutationProps,
  });

  const onSubmit = form.handleSubmit((data) => {
    createMutation.mutate(data);
  });

  return {
    onSubmit,
    form,
  };
}
