"use client";

import { createContext, useEffect, useState } from "react";

// Definindo tipos literais para maior type safety
type Theme = "light" | "dark";

// TIPAGEM DO PROVIDER
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

// TIPAGEM DO CONTEXTO
interface ThemeContextType {
  theme: Theme;
  switchTheme: () => void;
}

// CONTEXTO
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  switchTheme: () => {},
});

// PROVEDOR DO TEMA
export const ThemeProvider = ({
  children,
  defaultTheme = "dark",
}: ThemeProviderProps) => {
  // Estado do tema
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // EXECUTA QUANDO A PÁGINA RENDERIZA, E ALTERA O ELEMENTO DATA-THEME DO HTML
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  // Função para alternar entre os temas INTERRUPTOR
  const switchTheme = () => {
    // Usa setState funcional para garantir que está trabalhando com o valor mais atual
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Objeto com os valores que serão disponibilizados pelo contexto
  const contextValue: ThemeContextType = {
    theme,
    switchTheme,
  };

  // RETORNA O COMPONENTE.COMCONTEXTO
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
