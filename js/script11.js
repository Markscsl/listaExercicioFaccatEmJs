alert("Salario final com comissão")

let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "))
let carrosVendidos = parseFloat(prompt("Digite quantos carros foram vendidos: "))
let comissaoCarroVendido = parseFloat(prompt("Digite a comissão por cada carro vendido: "))
let vendasEfetuadas = parseFloat(prompt("Digite o valor por número de vendas efetuadas: "))

let salarioTotal = (comissaoCarroVendido * carrosVendidos) + (vendasEfetuadas * 5 / 100) + salarioFixo

alert("O salário total do funcionário é de: R$" +salarioTotal)