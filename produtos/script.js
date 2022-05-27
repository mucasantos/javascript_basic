const meuProduto = {
  id: String,
  nome: String,
  quantidade: Number,
  valorUnitario: Number,
  total: function () {
    return this.quantidade * this.valorUnitario;
  }
}

const produtos = [];

function calcular() {
  total.value = parseInt(qtd.value) * parseInt(valor.value);
}

function salvar() {

  meuProduto.nome = desc.value;
  meuProduto.quantidade = qtd.value;
  meuProduto.valorUnitario = valor.value;
  meuProduto.id = Date();

  total.value = meuProduto.total();

  let tr = document.createElement("tr");
  
  tr.insertCell(0).innerHTML = desc.value;
  tr.insertCell(1).innerHTML = qtd.value;
  tr.insertCell(2).innerHTML = valor.value;
  document.getElementById("tbody").appendChild(tr);

  //SAlva o produto na lista de produtos
  produtos.push(meuProduto);
  console.log(produtos);
}
