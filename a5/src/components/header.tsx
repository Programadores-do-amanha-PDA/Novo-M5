interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  type colorset = {
    primary: string;
    secondary: string;
  };

  const COLORS: colorset = {
    primary: "#f1f1f1",
    secondary: "#212121",
  };

  const RED: string = "#FF0000";

  return (
    <header style={{ backgroundColor: COLORS.primary, color: `${RED}` }}>
      {children}
    </header>
  );
}
