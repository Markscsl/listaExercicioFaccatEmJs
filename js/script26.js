alert("Produtos em estoque")

let quantidadeAtual = parseFloat(prompt("Digite a quantidade atual que tem no estoque: "))
let quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima que o estoque comporta: "))
let quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima que o estoque comporta: "))

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

if (quantidadeAtual >= quantidadeMedia){
    alert("Não efetuar compra!")
} else{
    alert("Efetuar compra!")
}
