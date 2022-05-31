const Carro = {
  nome: String,
  marca: String,
  ano: Number,
  valor: Number,
};

const listaDeCarros = [];

function salvar() {
  // Cria o seu novo objeto Carro.

  const carro = Object.create(Carro);

  carro.ano = anoDigitado.value;
  carro.marca = marcaDigitado.value;
  carro.nome = nomeDigitado.value;
  carro.valor = valorDigitado.value;

  listaDeCarros.push(carro);
  console.log(listaDeCarros);
}

const pessoa = {
  nome: "Samuel",
  idade: 22,
  peso: 90,
  altura: 1.9,
  anoNascimento: 2004,
  pais: { mae: "MAria Cicera", pai: "Não sei...." },
};

console.log(pessoa.pais.mae);
console.log(pessoa.pais.pai);

const pessoa2 = {
  nome: "Maria",
  idade: 16,
  peso: 45,
  altura: 1.55,
  anoNascimento: 2005,
};

const produto = {
  id: 123,
  nome: "camiseta",
  qtd: 12,
  valor: 4.25,
  valorTotal: function () {
    return this.qtd * this.valor;
  },
};

const listaProdutos = [];

//console.log(produto.valorTotal());

// console.log(pessoa2.nome);
