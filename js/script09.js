alert("Percentual reajuste")

let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário: "))
let porcentagem = parseFloat(prompt("Digite o percentual do reajuste: "))

let salarioNovo = (porcentagem/100 * salarioAtual + salarioAtual).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})


alert("O salário novo, com reajuste de "  +porcentagem+ " % "+ " é de: " +salarioNovo)