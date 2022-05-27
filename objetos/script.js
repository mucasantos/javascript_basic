const pessoa = {
  nome: "Samuel",
  idade: 22,
  peso: 90,
  altura: 1.9,
  anoNascimento: 2004,
};

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
console.log(produto.valorTotal());

console.log(pessoa2.nome);
