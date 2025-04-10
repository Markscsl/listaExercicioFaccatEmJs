alert("Idade em dias")

let idadeAnos = parseInt(prompt("Digite sua idade em anos: "))
let mes = parseInt(prompt("Digite quantos meses completos se passaram desde o seu ultimo aniversário: "))
let dias = parseInt(prompt("Digite quantos dias se passaram desde o seu último mêsversário: "))

let idadeDias = idadeAnos * 365 + mes * 30 + dias


alert("A idade do usuario em dias é de: " +idadeDias)