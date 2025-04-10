alert("Idade para votar")

let anoAtual = parseInt(prompt("Digite o ano em que estamos (sem abreviações): "))
let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "))

let idadeVotar = anoAtual - anoNascimento

if (idadeVotar >= 16){
    alert("Sua idade é: "+ idadeVotar + " anos. Então você pode votar") 
} else{
    alert("Sua idade é: "+ idadeVotar + " anos. Então você não pode votar")
}