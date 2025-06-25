import Link from "next/link";
import React from "react";

interface ProductReviewsProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductReviews({ params }: ProductReviewsProps) {
  const { productId } = await params;
  return (
    <>
      <div>Avaliações do produto {productId}</div>
      <h1> TODOS OS REVIEWS</h1>
      <ul>
        <li>
          <Link href={`/product/${productId}/reviews/1`}>Review 1</Link>
        </li>
        <li>
          <Link href={`/product/${productId}/reviews/2`}>Review 2</Link>
        </li>
        <li>
          <Link href={`/product/${productId}/reviews/3`}>Review 3</Link>
        </li>
      </ul>
    </>
  );
}
