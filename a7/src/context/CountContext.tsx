"use client";

import React, { createContext, useState } from "react";

// Criação do contexto com seus valores iniciais
export const CountContext = createContext({
  count: 0, // Contagem começa zerada
  increment: () => {}, // Função de incrementar começa vazia.
});

interface CountProviderProps {
  children: React.ReactNode;
}

// Cria o provedor com o estado e o manipulador do estado
export const CountProvider = ({ children }: CountProviderProps) => {
  // Estado de contagem
  const [count, setCount] = useState<number>(0);

  // Função que irá incrementar a contagem
  const increment = () => {
    setCount(count + 1);
  };

  // Retornamos o Provedor, juntamente com os valores do estado, funções que manipulam o estado e o contexto
  return (
    <CountContext.Provider
      value={{
        count,
        increment,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
