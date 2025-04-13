alert("Partida de futebol")

let nomeTime1 = prompt("Digite o nome do primeiro time:")
let nomeTime2 = prompt("Digite o nome do segundo time: ")
let golsTime1 = parseInt(prompt(`Digite a quantidade de gols do ${nomeTime1}: `))
let golsTime2 = parseInt(prompt(`Digite a quantidade de gols do ${nomeTime2}: `))

if (golsTime1 > golsTime2){
    alert(`O time ${nomeTime1} foi o vencedor, ganhando de ${golsTime1} à ${golsTime2}`)

} else if (golsTime2 > golsTime1){
    alert(`O time ${nomeTime2} foi o vencedor, ganhando de ${golsTime2} à ${golsTime1}`)

} else{
    alert(`A partida terminou em empate: ${golsTime1} a ${golsTime2}`)
}