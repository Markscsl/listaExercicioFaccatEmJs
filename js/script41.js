alert("Notas e médias dos alunos")

let nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "))
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "))
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "))
let mediaExercicios = parseFloat(prompt("Digite a média dos exercicíos do aluno: "))

let media = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7

if (media >= 9){
    alert("Conceito A")
} else if ((media >= 7) && (media < 9)){
    alert("Conceito B")
} else if ((media >= 6) && (media < 7.5)){
    alert("Conceito C")
} else {
    alert("Conceito D")
}

