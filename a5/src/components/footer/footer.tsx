import React from "react";
import style from "./footer.module.css";

interface FooterProps {
  children: React.ReactNode;
}
export default function Footer({ children }: FooterProps) {
  return <footer className={style.footer}>{children}</footer>;
}
