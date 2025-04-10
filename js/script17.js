alert("Dar a média do aluno")

let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação do aluno: "))
let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação do aluno: "))

let mediaFinal = (nota1 + nota2) / 2

if (mediaFinal >= 6){
    alert("Aluno aprovado! sua média final foi de: " + mediaFinal)
} else{
    alert("Aluno reprovado! sua média final foi de: " + mediaFinal)
}