alert("Descobrir as horas de uma partida de xadrez")

let horaInicio = parseInt(prompt("Digite a hora em que a partida se iniciou: "))
let horaFinal = parseInt(prompt("Digite a hora em que a partida terminou: "))

if (horaFinal < horaInicio){
    let horaTotal = (24 - horaInicio) + horaFinal
    alert("O tempo de partida foi de: "+ horaTotal +" Horas ")
} else{
    let horaTotal = horaInicio - horaFinal
    alert("O tempo de partida foi de: "+ horaTotal +" Horas ")
}
