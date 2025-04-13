alert("Comparar dois valores")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))

if (numero1 > numero2){
    alert(`O primeiro número ${numero1} é maior que o segundo número ${numero2} `)
} else if (numero2 > numero1){
    alert(`O segundo número ${numero2} é maior que o primeiro número ${numero1} `)
} else {
    alert(`Os números ${numero1} e ${numero2} são número iguais.`)
}