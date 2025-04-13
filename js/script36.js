alert("Calculo e produto de idades")

let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem: "))
let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher: "))
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem: "))
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher: "))

let soma = 0
let produto = 0

if ((idadeHomem1 > idadeHomem2) && (idadeMulher1 > idadeMulher2)){
    soma = idadeHomem1 + idadeMulher2
    alert(`A soma das idades do homem mais velho com a idade da mulher mais nova é de: ${soma}`)
} else {
    soma = idadeHomem2 + idadeMulher1
    alert(`A soma das idades do homem mais velho com a idade da mulher mais nova é de: ${soma}`)
}

if ((idadeHomem1 < idadeHomem2) && (idadeMulher1 < idadeMulher2)){
    produto = idadeHomem1 * idadeMulher2
    alert(`O produto das idades do homem mais novo com a idade da mulher mais velha é de: ${produto}`)
} else {
    produto = idadeHomem2 * idadeMulher1
    alert(`O produto das idades do homem mais novo com a idade da mulher mais velha é de: ${produto}`)
}