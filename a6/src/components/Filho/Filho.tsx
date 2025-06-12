import React, { useState } from "react";

interface FilhoProps {
  countDoPai: number;
}
export default function Filho({ countDoPai }: FilhoProps) {
  const [dados, setDados] = useState<number | null>(0);

  return (
    <div className="Filho">
      <h1>Componente Filho</h1>
      <h2>Recebi do pai: {dados} </h2>
      <div className="flex flex-col gap-y-2">
        {/* RECEBENDO DADOS DO PAI */}
        <button
          onClick={() => setDados(countDoPai)}
          className="p-2 bg-amber-300 text-black rounded-sm"
        >
          {" "}
          Receber dados do Pai{" "}
        </button>
      </div>
    </div>
  );
}
