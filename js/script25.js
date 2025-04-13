alert("Saldo de uma conta")

let numeroConta = prompt("Digite o número da sua conta: ")
let saldo = parseFloat(prompt("Digite o saldo atual da sua conta: "))
let debito = parseFloat(prompt("Digite o valor de débito que você possui: "))
let credito = parseFloat(prompt("Digite o valor de crédito que você possui: "))

let saldoAtual = (saldo - debito) + credito

if (saldoAtual >= 0){
    alert(`Você possui R$${saldoAtual} de saldo, então seu saldo é positivo!`)
} else{
    alert(`Você possui R$${saldoAtual} de saldo, então seu saldo é negativo!`)
}