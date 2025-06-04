interface Endereco {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
}

interface Cliente {
  nome: string;
  idade: number;
  endereco: Endereco; // Objeto
  telefone?: number;
}
function exibirCliente(cliente: Cliente): void {
  console.log(`Cliente: ${cliente.nome}`);
  console.log(`Idade: ${cliente.idade}`);
  console.log(`Endereço: ${cliente.endereco.rua}`);

  if (cliente.telefone) {
    console.log(`Telefone: $${cliente.telefone}`);
  } else {
    console.log("Telefone não informado");
  }
}

const novoCliente: Cliente = {
  nome: "Daniel",
  idade: 27,
  endereco: {
    rua: "...",
    numero: 22,
    cidade: "Petrópolis",
    estado: "Rio de Janeiro",
  },
};

exibirCliente(novoCliente);
