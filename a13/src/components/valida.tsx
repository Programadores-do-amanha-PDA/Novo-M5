"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(3, "Seu nome deve conter no mínimo 3 letras"),
  email: z.string().email("Email inválido"),
});

export default function FormularioValidado() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    alert("Formulário submetido!");
  };

  useEffect(() => {
    console.log("Re-Renderizando");
  }, [register]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex p-2 gap-x-2"
    >
      <div>
        <label className="text-black">Nome</label>
        <input
          {...register("nome")}
          className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.nome && (
          <span className="text-red-600">{errors.nome.message as string}</span>
        )}
      </div>
      <div>
        <label className="text-black">Email</label>
        <input
          {...register("email")}
          className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && (
          <span className="text-red-600">{errors.email.message as string}</span>
        )}
      </div>
      <button type="submit" className="text-black">
        Enviar
      </button>
    </form>
  );
}
