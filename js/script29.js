alert("Soma dos maiores")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))
let soma = 0

if ((numero1 > numero2) && (numero2 > numero3)){
    soma = numero1 + numero2
    alert(`A soma de ${numero1} + ${numero2} é de: ${soma}`)

} else if ((numero1 > numero3) && (numero3 > numero2)){
    soma = numero1 + numero3
    alert(`A soma de ${numero1} + ${numero3} é de: ${soma}`)
    
} else if ((numero2 > numero1) && (numero1 > numero3)){
    soma = numero2 + numero1
    alert(`A soma de ${numero2} + ${numero1} é de: ${soma}`)

} else if ((numero2 > numero3) && (numero3 > numero1)){
    soma = numero2 + numero3
    alert(`A soma de ${numero2} + ${numero3} é de: ${soma}`)

} else if ((numero3 > numero1) && (numero1 > numero2)){
    soma = numero3 + numero1
    alert(`A soma de ${numero3} + ${numero1} é de: ${soma}`)

} else if ((numero3 > numero2) && (numero2 > numero1)){
    soma = numero3 + numero2
    alert(`A soma de ${numero3} + ${numero2} é de: ${soma}`)
}