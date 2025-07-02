"use client";

import { useEffect, useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    console.log("Re-Renderizando");
  }, [nome, email]);

  return (
    <form className="bg-white flex p-2 gap-x-2">
      <div>
        <label className="text-black">Nome</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)} // re-render!
          className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="text-black">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)} // re-render!
          className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      {/* Validação manual complicada... */}
      <button type="submit" className="text-black">
        Enviar
      </button>
    </form>
  );
}
