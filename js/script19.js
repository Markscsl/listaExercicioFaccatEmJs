alert("Comparar dois valores e apresentar o maior")

let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))

if (valor1 > valor2){
    alert("O primeiro valor digitado: "+ valor1 + " é maior que o segundo valor digitado: "+ valor2)
} else{
    alert("O segundo valor digitado:  "+ valor2 + " é maior que o primeiro valor digitado: "+ valor1)
}