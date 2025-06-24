"use client";
import { CountContext } from "@/context/CountContext";
import React, { useContext } from "react";

export default function Filho() {
  const context = useContext(CountContext);

  const { count } = context;
  return (
    <>
      {" "}
      <h1>COMPONENTE FILHO</h1>
      <p>{count}</p>
    </>
  );
}
