alert("Exercicio 38")

let codigoUsuario = parseInt(prompt("Digite o código do usúario: "))
let senhaUsuario 

if (codigoUsuario != 1234){
    alert("Código digitado inválido.")
}

if (codigoUsuario == 1234){
    senhaUsuario = parseInt(prompt("Digite a senha do usúario: "))
}

if (senhaUsuario != 9999){
    alert("Senha incorreta.")
} else {
    alert("Acesso Permitido.")
}