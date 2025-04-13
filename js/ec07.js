alert("Dias da semana")
alert("Olá! Informe um número para escolher um dia da semana \n (Considere que o primeiro dia da semana é domingo!)") 

let diaSemana = parseInt(prompt("1, 2, 3, 4, 5, 6, 7"))

switch (diaSemana){
    case 1:
        alert("Hoje é domingo")
        break   
    case 2:
        alert("Hoje é segunda")
        break
    case 3:
        alert("Hoje é terça")
        break
    case 4:
        alert("Hoje é quarta")
        break
    case 5:
        alert("Hoje é quinta")
        break
    case 6:
        alert("Hoje é sexta")
        break
    case 7: 
        alert("Hoje é sábado")
        break

    default:
        alert("Por favor, digite um número válido. \n")
}