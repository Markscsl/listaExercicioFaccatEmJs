alert("Ler 3 valores e apresentar o maior entre eles.")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

if ((numero1 > numero2) && (numero1 > numero3)){
    alert(`O número ${numero1}, é o maior número!`)
} else if ((numero2 > numero1) && (numero2 >  numero3)){
    alert(`O número ${numero2}, é o maior número!`)
} else {
    alert(`O número ${numero3}, é o maior número!`)
}