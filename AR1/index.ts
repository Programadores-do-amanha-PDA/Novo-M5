// interface Props {
//   id: number;
//   auxiliar: () => void;
//   mostrar: () => Promise<number>;
// }

import { Funcionario, PropPessoa } from "./interfaces";

// type Props2 = string;

const pessoa: PropPessoa = {
  id: 1,
  nome: "Daniel",
  mostrar: (x: string) => {
    console.log(x);
  },
};

const pessoa2: Funcionario = {
  id: 12,
  nome: "Daniel",
  mostrar: (x: number) => {
    console.log(x);
  },
  cargo: "Dev",
};

const lista: (string | number)[] = ["Daniel", 123123];

const lista2: number[] = [1, 6549654, 5698987];
