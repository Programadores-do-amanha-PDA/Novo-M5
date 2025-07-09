"use client";

import authAPI from "@/lib/api";
import { ContextProps, LoginProps, User } from "@/types";
import React, { createContext, useState, useEffect } from "react";
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<ContextProps | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar se o usuário já está autenticado quando o componente carrega
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await authAPI.me(); // Método para verificar o usuário atual
        if (response.user) {
          setUser(response.user);
        }
      } catch (error) {
        console.log("Usuário não autenticado:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async ({ email, password }: LoginProps) => {
    const response = await authAPI.login({ email, password });
    console.log(response.user);
    const user = response.user;
    setUser(user);
    console.log(user); // FAZENDO SEM SEGURANÇA POIS ESTAMOS PEGANDO A RESPOSTA DO USUÁRIO DIRETAMENTE DA API
    // O CERTO SERIA CRIAR UM MIDDLEWARE QUE LÊ-SE O TOKEN DO COOKIE, E VERIFICASSE PELO BACKEND AS INFORMAÇÕES BASEADAS
    // NAQUELE TOKEN
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
  };

  const value: ContextProps = {
    user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
