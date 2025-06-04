let nome: string = "Daniel";
console.log(nome);

let array: (string | number | boolean)[] = [];

interface PropsPessoa {
  nome: string;
  idade: number;
  cargo?: string; // Tipagem opcional
}

interface Funcionario extends PropsPessoa {
  cargo: string;
}

type Pessoa2 = {
  nome: string;
  idade?: number;
};

const pessoa: PropsPessoa = {
  nome: "Daniel",
  idade: 27,
};

// Type
type Status = "ativo" | "inativo" | "pendente";

// Herança indireta
type RetornoAPI = {
  status: Status;
};

const retorno: RetornoAPI = {
  status: "pendente",
};

// type pessoa = [string, string, number];

// let descricao: pessoa;

// descricao = ["Daniel", "Mendes", 27];

interface somaProp {
  x: number;
  y: number;
  z?: number;
}
function soma({ x, y, z }: somaProp) {}
