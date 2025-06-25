import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1>Lista de produtos</h1>
      <ul>
        <li>
          <Link href="/product/1">Produto 1</Link>
        </li>
        <li>
          <Link href="/product/2">Produto 2</Link>
        </li>
        <li>
          <Link href="/product/3">Produto 3</Link>
        </li>
      </ul>
    </section>
  );
}
