alert("Descobrir se está apto à aposentadoria")

let numeroEmpregado = prompt("Digite o código do empregado: ")
let anoNascimento = parseInt(prompt("Digite o ano em que o empregado nasceu: "))
let anoIngresso = parseInt(prompt("Digite o ano em que o funcionário entrou na empresa: "))
let anoAtual = parseInt(prompt("Digite o ano atual: "))

let tempoEmpresa = anoAtual - anoIngresso
let idadeFuncionario = anoAtual - anoNascimento

if (idadeFuncionario >= 65){
    alert(`Você possui ${idadeFuncionario} anos, portanto tem direito a aposentadoria.`)
} else if (tempoEmpresa >= 30){
    alert(`Você tem ${tempoEmpresa} anos de trabalho, portanto tem direito a aposentadoria.`)
} else if ((idadeFuncionario >= 60) && (tempoEmpresa >= 25)){
    alert(`Você possui ${idadeFuncionario} anos e ${tempoEmpresa} anos de empresa, portanto tem direito a aposentadoria.`)
} else {
    alert("Você não possui direito a aposentadoria.")
}