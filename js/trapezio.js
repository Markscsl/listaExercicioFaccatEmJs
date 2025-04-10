alert("Descobrir a área do trapézio")

let baseMaior = parseFloat(prompt("Digite o valor da base maior do trapézio: "))
let baseMenor = parseFloat(prompt("Digite o valor da base menor do trapézio: "))
let altura = parseFloat(prompt("Digite o valor da altura do trapézio: "))

let area = ((baseMaior + baseMenor) * altura)/2

alert("O valor da area do trapézio é de: "+area)