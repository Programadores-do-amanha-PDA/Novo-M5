"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function FormularioBom() {
  const { register, handleSubmit } = useForm();

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
      </div>
      <div>
        <label className="text-black">Email</label>
        <input
          {...register("email")}
          className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button type="submit" className="text-black">
        Enviar
      </button>
    </form>
  );
}
