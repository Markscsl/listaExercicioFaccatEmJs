alert("Temporizador Usúario")

let horas = parseInt(prompt("Digite o número de horas: "))
let minutos = parseInt(prompt("Digite o número de segundos: "))
let segundos = parseInt(prompt("Digite o número de segundos: "))

for (horas = horas; horas > -1; horas--) {
    for (minutos = minutos; minutos > -1; minutos--) {
        for (segundos = segundos; segundos > -1; segundos--) {
            console.log(`${horas}:${minutos}:${segundos}`)
        }
        segundos = 59
    }
    minutos = 59
}