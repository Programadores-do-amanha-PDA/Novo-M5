import Filho from "@/components/Filho/Filho";
import Pai from "@/components/Pai/Pai";
import { CountProvider } from "@/context/CountContext";

export default function Home() {
  return (
    <>
      <CountProvider>
        <Pai />
      </CountProvider>
      <Filho />
    </>
  );
}
