function livros(usuario: string, ...livros: string[]): void {
  for (let i = 0; i < livros.length; i++) {
    console.log(usuario + " - " + livros[i]);
  }
}

livros(
  "Daniel",
  "1984",
  "Os Cientistas",
  "One Punch-men",
  "Entendendo Algoritmos"
);
let num: number[] = [134, 165, 798, 120, 0, 12];
let maior: number = Math.max(...num);

interface pessoaProps {
  nome: string;
  idade: number;
}

const pessoa: pessoaProps = { nome: "Daniel", idade: 27 };
const pessoa2: pessoaProps = { ...pessoa };

const a: number[] = [1, 2];
const b: number[] = [3, 4];
const c: number[] = [...a, ...b]; // [1,2,3,4]

// const a: (string | number)[] = ["asodiqw", 132165, true];
