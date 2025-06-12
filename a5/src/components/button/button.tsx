import React, { CSSProperties, JSX } from "react";
import buttonStyle from "./button.module.css";

interface ButtonProps {
  style: CSSProperties;
  children: JSX.Element;
  onClick?: () => void;
}
export default function Button({ style, children, onClick }: ButtonProps) {
  return (
    <button style={style} className={buttonStyle.footer} onClick={onClick}>
      {children}
    </button>
  );
}
