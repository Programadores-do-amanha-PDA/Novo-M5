"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userContext = useContext(AuthContext);

  useEffect(() => {
    console.log(userContext);
  }, [userContext]);

  // Se o contexto não existe, há um erro de configuração
  if (!userContext) {
    return <h1>Erro: Contexto de autenticação não encontrado</h1>;
  }

  // Mostra loading enquanto verifica a autenticação
  if (userContext.isLoading) {
    return <h1>Carregando...</h1>;
  }

  // Verifica se o usuário está autenticado e é admin
  if (!userContext.user || userContext.user.role !== "ADMIN") {
    return <h1>Você não está autenticado como Administrador</h1>;
  }

  return <main>{children}</main>;
}
