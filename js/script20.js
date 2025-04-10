alert("Colocar valores em ordem crescente")

let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))

if (valor1 > valor2){
    alert("Os valores em ordem crescente são apresentados dessa forma: " + valor2 +" e "+ valor1)
} else{
    alert("Os valores em ordem crescente são apresentados dessa forma: " + valor1 +" e "+ valor2)
}