alert("Olá! esta é uma calculadora simples.")
alert("Iremos solicitar dois número a serem calculados, e a operação a ser utilizada.")

let tipoOperacao = parseFloat(prompt("Digite a operação da sua preferencia: \n 1 = Soma \n 2 = Subtração \n 3 = Multiplicação \n 4 = Divisão"))
let numero1 = parseFloat(prompt("Digite o primeiro número a ser calculado: "))
let numero2 = parseFloat(prompt("Digite o segundo número a ser calculado: "))
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

switch (tipoOperacao){
    case 1:
        alert("O resultado da sua soma é de: "+soma)
    break

    case 2:
        alert("O resultado da sua subtração é de: "+subtracao)
    break

    case 3:
        alert("O resultado da sua multiplicação é de: "+multiplicacao)
    break

    case 4:
        alert("O resultado da sua divisão é de: "+divisao)
    break

    default:
        alert("Digite um tipo de operação válido.")
}