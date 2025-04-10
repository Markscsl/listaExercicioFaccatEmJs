alert("Bem-vindo a uma calculadora simples")

let operacao = prompt("Digite um símbolo correspondente a operação: \n + Adição \n - Subtração \n * Multiplicação \n / Divisão")
let valor1 = parseFloat(prompt("Digite o primeiro valor a ser calculado: "))
let valor2 = parseFloat(prompt("Digite o segundo valor a ser calculado: "))
let resultado

switch (operacao){
    case "+":
        resultado = valor1 + valor2
        alert("O resultado da soma é: " +resultado)
        break
    
    case "-":
        resultado = valor1 - valor2
        alert("O resultado da subtração é: "+resultado)
        break
    
    case "*":
        resultado = valor1 * valor2
        alert("O resultado da multiplicação: "+resultado)
        break

    case "/":
        resultado = valor1 / valor2
        alert("O resultado da divisão é de: "+resultado)

    default:
        alert("Por favor digite uma operação válida.")
}