alert("Percentual de votos")

let totalEleitores = parseInt(prompt("Digite o total de eleitores do estado: "))
let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "))
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "))
let votosValidos = parseInt(prompt("Digite a quantidade de votos validos: "))

let totalBrancos = (votosBrancos/totalEleitores) * 100
let totalNulos = (votosNulos/totalEleitores) * 100
let totalValidos = (votosValidos/totalEleitores) * 100

alert("A porcentagem de votos brancos é de: " +totalBrancos+ " % ")
alert("A porcentagem de votos nulos é de: " +totalNulos+ " % ")
alert("A porcentagem de votos validos é de: " +totalValidos+ " % ")