import React from "react";

interface ProductReviewProps {
  params: Promise<{ productId: string; reviewId: string }>;
}

export default async function ProductReview({ params }: ProductReviewProps) {
  const { productId, reviewId } = await params;
  return (
    <section>
      <h1>
        Detalhes da avalição {reviewId} do produto {productId}
      </h1>
    </section>
  );
}
