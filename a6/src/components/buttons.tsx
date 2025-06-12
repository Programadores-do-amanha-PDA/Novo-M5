"use client";
import useCounter from "@/hooks/useCounter";
import React from "react";

export default function Buttons() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <section className="w-full h-[100px] bg-white text-black flex flex-col items-center justify-center gap-y-4">
      <article className="w-[100px] flex justify-around gap-x-2 items-center">
        <button
          onClick={increment}
          className="rounded-sm bg-[#515151] w-8 h-8 text-center hover:cursor-pointer hover:bg-gray-500"
        >
          +
        </button>
        <span>{count}</span>
        <button
          onClick={decrement}
          className="rounded-sm bg-[#515151] w-8 h-8 text-center hover:cursor-pointer hover:bg-gray-500"
        >
          -
        </button>
      </article>
      <button
        onClick={reset}
        className="rounded-sm bg-[#910f0f] p-2 text-white hover:bg-red-600 hover:cursor-pointer"
      >
        Reset
      </button>
    </section>
  );
}
