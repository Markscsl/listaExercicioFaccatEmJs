alert("Exercicio 34")

let valorX = parseInt(prompt("Digite o valor de X:"))
let valorY = parseInt(prompt("Digite o valor de Y:"))

let resposta
let valorZ = (valorX * valorY) + 5

if (valorZ <= 0) {
    resposta = "A"
} else if (valorZ <= 100) {
    resposta = "B"
} else {
    resposta = "C"
}

alert(valorZ+ " = " +resposta)