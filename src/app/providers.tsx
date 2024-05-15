import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      {children} <ReactQueryDevtools initialIsOpen={false} /> <Toaster />
    </QueryProvider>
  );
}
