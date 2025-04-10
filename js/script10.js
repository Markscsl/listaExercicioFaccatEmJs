alert("Calculo de um carro novo")

let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "))
let totalCarro = (custoFabrica * 28 / 100) + (custoFabrica * 45 / 100) + custoFabrica
alert("O valor total do carro é de:  R$"+totalCarro)