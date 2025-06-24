"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full h-[100svh] flex flex-col gap-y-2 items-center justify-center bg-white">
      <DotLottieReact src="/lottie/notFound.lottie" loop autoplay />
      <Link href="/"> Voltar para Home</Link>
    </main>
  );
}
