alert("Calcular custo compra")

let macasCompradas = parseInt(prompt("Digite o número de maçãs compradas: "))
let precoMaca = 1.30

if (macasCompradas < 12){
    let totalMacas  = macasCompradas * precoMaca
    alert("O valor da sua compra foi de: R$" + totalMacas)
} else{
    let precoMaca = 1.00
    let totalMacas = macasCompradas * precoMaca
    alert("O valor da sua compra foi de: R$" + totalMacas)
}