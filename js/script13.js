alert("Calculador de média ponderada")

let nota1 = parseFloat(prompt("Digite o valor da primeira nota do aluno: "))
let nota2 = parseFloat(prompt("Digite o valor da segunda nota do aluno: "))
let nota3 = parseFloat(prompt("Digite o valor da terceira nota do aluno: "))

let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

alert("A média final do aluno foi de: "+mediaFinal)