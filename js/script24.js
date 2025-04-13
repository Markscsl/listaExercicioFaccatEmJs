alert("Salário com comissão")

let salarioFixo = parseFloat(prompt("Digite o salário fixo do funcionário: "))
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "))
let salarioFinal = 0

if (valorTotalVendas < 1500){
    salarioFinal = (3/100*valorTotalVendas) + salarioFixo
    alert(`O salário final do funcionário é de: R$${salarioFinal}`)
} else{
    salarioFinal = (8/100*valorTotalVendas) + salarioFixo
    alert(`O salário final do funcionário: R$${salarioFinal}`)
}