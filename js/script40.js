alert("Produtos com desconto")

let nomeProduto = prompt("Digite o nome do produto que deseja adquirir: ")
let quantidadeAdquirida = parseInt(prompt("Digite a quantidade que adquiriu: "))
let precoUnitario = parseFloat(prompt("Digite o valor unitário do produto: "))

let valorFinal = 0
let desconto = 0
let total = quantidadeAdquirida * precoUnitario

if (quantidadeAdquirida <= 5){
    desconto = (2/100 * total)
    valorFinal = total - desconto
    alert(`O valor total a ser pago é de: R$${valorFinal}`)
} else if ((quantidadeAdquirida > 5) && (quantidadeAdquirida <= 10)){
    desconto = (3/100 * total)
    valorFinal = total - desconto
    alert(`O valor total a ser pago é de: R$${valorFinal}`)
} else {
    desconto = (5/100 * total)
    valorFinal = total - desconto
    alert(`O valor total a ser pago é de: R$${valorFinal}`)
}
