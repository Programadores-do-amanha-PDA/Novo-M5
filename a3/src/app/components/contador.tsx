"use client";

// Importar o hook de estado
import { useState } from "react";

export default function Contador() {
  // let contador = 0;

  //    Variável, função que manipula a variável
  const [contador, setContador] = useState<number>(0); // Um estado do meu componente

  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>Contagem: {contador}</p>
    </>
  );
}
