alert("Descobrir triângulo")

let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))
let valor3 = parseInt(prompt("Digite o terceiro valor: "))

if (valor1 < valor2 + valor3) {
    alert("É um triângulo")
} else if (valor2 < valor1 + valor3) {
    alert("É um triângulo")
} else if (valor3 < valor1 + valor2) {
    alert("É um triângulo")
} else {
    alert("Não é um triângulo")
}