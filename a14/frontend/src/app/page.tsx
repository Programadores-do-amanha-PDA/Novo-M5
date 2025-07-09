"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function Home() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "Você não está dentro do contexto, ou o contexto está undefined"
    );
  }

  const { login, logout } = authContext;

  return (
    <section>
      <h1>TESTE</h1>
      <button
        onClick={() => {
          login({
            email: "admin@example.com",
            password: "password",
          });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </section>
  );
}
