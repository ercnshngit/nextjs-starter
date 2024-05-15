import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-blue-500 p-4">{children}</div>;
}
