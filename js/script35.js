alert("Posto de gasolina")

let litrosVendidos = parseFloat(prompt("Digite a quantidade de litros vendidos: "))
let tipoCombustivel = prompt("Digite o seu tipo de combustível (G ou A): ")
let gasolina = litrosVendidos * 3.30
let alcool = litrosVendidos * 2.90
let valorTotal = 0
let descontoGasolina = 0
let descontoAlcool = 0

if ((litrosVendidos <= 20) && (tipoCombustivel == "G")){
    descontoGasolina = (4/100 * gasolina)
    valorTotal = gasolina - descontoGasolina
   alert(`O valor total da gasolina com desconto foi de: ${valorTotal.toFixed(2)}`)
} else if ((litrosVendidos > 20) && (tipoCombustivel == "G")){
    descontoGasolina = (6/100 * gasolina)
    valorTotal = gasolina - descontoGasolina
    alert(`O valor total da gasolina com desconto foi de: ${valorTotal.toFixed(2)}`)
} else if ((litrosVendidos <= 20) && (tipoCombustivel == "A")){
    descontoAlcool = (3/100 * alcool)
    valorTotal = alcool - descontoAlcool
    alert(`O valor total do alcool com desconto foi de: ${valorTotal.toFixed(2)}`)
} else {
    descontoAlcool = (5/100 * alcool)
    valorTotal = alcool - descontoAlcool
    alert(`O valor total do alcool com desconto foi de: ${valorTotal.toFixed(2)}`)
}