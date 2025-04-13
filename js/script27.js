alert("Descobrir positivo, negativo ou zero")

let numero = parseInt(prompt("Digite um número para descobrir se é positivo, negativo ou igual a zero: "))

if (numero < 0){
    alert(`O número digitado ${numero}, é um número negativo!`)
} else if (numero == 0){
    alert(`O número digitado ${numero}, é igual a 0!`)
} else{
    alert(`O número digitado ${numero}, é um número positivo!`)
}