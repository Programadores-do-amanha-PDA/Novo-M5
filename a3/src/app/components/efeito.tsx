"use client";

import { useEffect } from "react";

export default function Efeito() {
  useEffect(() => {
    console.log("Componente Montado");
  }, []); // Array de dependências, quando vazio, ele executa o callback do useEffect apenas 1 vez, quando o componente renderiza

  return <div>Conteúdo do Componente</div>;
}
