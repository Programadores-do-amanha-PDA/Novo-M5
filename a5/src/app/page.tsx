"use client";

import Button from "@/components/button/button";
import Card from "@/components/card";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import Span from "@/components/span";
import { useState } from "react";

export default function Home() {
  const [change, setIsChange] = useState<boolean>(false);

  return (
    <>
      <Header>
        <p className="badge">Teste</p>
        <Button
          style={{ color: change ? "#00FF00" : "#0000FF" }}
          onClick={() => {
            setIsChange(!change); // Interruptor
          }}
        >
          <p>Clique Aqui</p>
        </Button>
        <Span status="success"></Span>
      </Header>
      <Card className="w-[100%] h-[212px] bg-sky-800 text-2xl text-amber-800 flex flex-col justify-center items-center hover:bg-amber-800 hover:text-amber-50">
        <h1>Título Card</h1>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
          repellat numquam modi laborum tenetur hic voluptates sequi asperiores
          in dolorem deleniti accusamus, eius rerum fugiat dolores inventore
          harum debitis facere?
        </h2>
      </Card>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  );
}
