export interface PropPessoa {
  id: number | string;
  nome: string;
  mostrar: any;
}

export interface Funcionario extends PropPessoa {
  cargo: string;
}
