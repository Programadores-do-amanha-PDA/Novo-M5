import React from "react";

interface layoutSobreProps {
  children: React.ReactNode;
}
export default function layoutSobre({ children }: layoutSobreProps) {
  return <main className="bg-blue-300">{children}</main>;
}
