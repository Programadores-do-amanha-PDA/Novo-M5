// import Contador from "./components/contador";
import Contador2 from "./components/contador2";
import Efeito from "./components/efeito";

export default function Home() {
  return (
    <section className="w-[100%] h-[100%] flex justify-center items-center flex-col gap-y-2">
      {/* <Contador></Contador> */}
      <Contador2></Contador2>
      <Efeito></Efeito>
    </section>
  );
}
