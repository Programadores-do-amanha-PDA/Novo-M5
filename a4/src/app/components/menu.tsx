interface MenuProps {
  children: React.ReactNode;
}
export default function Menu({ children }: MenuProps) {
  return <nav className="w-[100%] flex gap-x-2">{children}</nav>;
}
