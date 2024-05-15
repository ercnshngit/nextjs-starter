import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded p-4">{children}</div>;
}
