"use client";

// Importar o hook de estado
import { useEffect, useState } from "react";

export default function Contador2() {
  // let contador = 0;

  //    Variável, função que manipula a variável
  const [contador, setContador] = useState<number>(0); // Um estado do meu componente
  const [paragrafo, setParagrafo] = useState<string>("");

  useEffect(() => {
    console.log("O contador mudou para: ", contador);

    if (contador === 3) {
      setParagrafo("Contador chegou em 3");
    }
  }, [contador]); // Array de dependências, está de olho nas mudanças do contador

  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>Contagem: {contador}</p>
      <span>{paragrafo}</span>
    </>
  );
}
