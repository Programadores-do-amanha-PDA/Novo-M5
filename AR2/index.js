//                       [N] livros
function livros(usuario, ...livros) {
  for (i = 0; i < livros.length; i++) {
    console.log(usuario + " - " + livros[i]);
  }
}

// ["1984", "Os Cientistas", "One Punch-men", "Entendendo Algoritmos"];
livros(
  "Daniel",
  "1984",
  "Os Cientistas",
  "One Punch-men",
  "Entendendo Algoritmos"
);

let num = [134, 165, 798, 120, 0, 12];
let maior = Math.max(num);

// console.log(maior);

const pessoa = { nome: "Daniel", idade: 27 };
const pessoa2 = { ...pessoa };

const { nome, idade } = pessoa;
// console.log(nome);
// console.log(idade);

// console.log(pessoa2);

const a = [1, 2];
const b = [3, 4, 5, 6, 7];

const [tres, quatro] = b;

// console.log(tres, quatro);

const c = [...a, ...b]; // [1,2,3,4]

const [batata, titulo, terceiro, ...resto] = c;

console.log(batata, titulo, terceiro, resto);

// console.log(c);
