alert("Bem Vindo!")

let estacaoAno = parseInt(prompt("Digite um valor de 1 a 4 para descobrir qual estação do ano corresponde a ele: "))

switch (estacaoAno){
    case 1:
        alert("Primavera")
    break
    
    case 2:
        alert("Verão")
    break

    case 3:
        alert("Outono")
    break

    case 4:
        alert("Inverno")
    break

    default:
        alert("O número digitado, não corresponde a nenhuma estação.")
}