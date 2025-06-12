interface CardProps {
  children: React.ReactNode;
  className: string;
}
export default function Card({ className, children }: CardProps) {
  return <article className={className}>{children}</article>;
}
