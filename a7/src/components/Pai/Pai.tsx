"use client";

import { CountContext } from "@/context/CountContext";
import { useContext } from "react";

export default function Pai() {
  // Consumindo o contexto
  const context = useContext(CountContext);

  // Desestruturando o que eu quero do contexto
  const { count, increment } = context;

  return (
    <div className="Pai">
      <div className="Conteudo-Pai">
        <h1>Componente Pai</h1>
        <h2>Contador {count}</h2>
        <button
          onClick={increment}
          className="p-2 bg-amber-300 text-black rounded-sm"
        >
          {" "}
          Incrementar{" "}
        </button>
      </div>
    </div>
  );
}
