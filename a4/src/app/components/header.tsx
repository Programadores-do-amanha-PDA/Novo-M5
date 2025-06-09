import React from "react";

interface HeaderProps {
  width: string;
  height: string;
  bk_color: string;
  color: string;
  display: string;
  children: React.ReactNode;

  //   image: string;
  //   titulo: string;
  //   menu: string;
  //   profilePicture?: boolean
}

export default function Header({
  width,
  height,
  bk_color,
  color,
  display,
  children,
}: HeaderProps) {
  return (
    <header
      style={{
        width: width,
        height: height,
        backgroundColor: bk_color,
        color: color,
        display: display,
      }}
    >
      {children}
    </header>
  );
}
