import Link from "next/link";
import React from "react";

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { productId } = await params;

  const msg = productId === "2000" ? "Você comprou o 2000º do produto" : null;

  return (
    <div>
      Detalhes do produto {productId}
      {msg}
      <Link href={`/product/${productId}/reviews`}>
        Ver avaliações do produto
      </Link>
    </div>
  );
}
