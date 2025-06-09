import { CSSProperties } from "react";

interface CardProps {
  children: React.ReactNode;
  style: CSSProperties;
}

export default function Card({ children, style }: CardProps) {
  return <div style={style}>{children}</div>;
}
