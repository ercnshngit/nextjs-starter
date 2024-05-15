import Header from "@/components/header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <Header />
      {children}
    </div>
  );
}
