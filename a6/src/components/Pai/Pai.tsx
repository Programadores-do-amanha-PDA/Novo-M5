"use client";

import React, { useState } from "react";
import Filho from "../Filho/Filho";

export default function Pai() {
  // COUNT DO PAI
  const [count, setCount] = useState<number>(0);

  // MANIPULAÇÃO DO COUNT DO PAI
  const increment = () => {
    setCount(count + 1);
  };

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
          Adicionar{" "}
        </button>
      </div>
      {/* ENVIA O SEU COUNT PARA O FILHO */}
      <Filho countDoPai={count} />
    </div>
  );
}
