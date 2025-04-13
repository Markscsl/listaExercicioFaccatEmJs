alert("Ordem crescente")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

if ((numero1 < numero2) && (numero2 < numero3)){
     alert(`Ordem crescente: ${numero1} ${numero2} ${numero3}`)
     
} else if ((numero1 < numero3) && (numero3 < numero2)){
    alert(`Ordem crescente: ${numero1} ${numero3} ${numero2}`)
       
} else if ((numero2 < numero1) && (numero1 < numero3)){
    alert(`Ordem crescente: ${numero2} ${numero1} ${numero3}`)

} else if ((numero2 < numero3) && (numero3 < numero1)){
    alert(`Ordem crescente: ${numero2} ${numero3} ${numero1}`)

} else if ((numero3 < numero1) && (numero1 < numero2)){
    alert(`Ordem crescente: ${numero3} ${numero1} ${numero2}`)

} else if ((numero3 < numero2) && (numero2 < numero1)){
    alert(`Ordem crescente: ${numero3} ${numero2} ${numero1}`)
}