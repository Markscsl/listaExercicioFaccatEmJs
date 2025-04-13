alert("Peso ideal")

let nome = prompt("Digite o seu nome: ")
let altura = parseFloat(prompt("Digite a sua altura: "))
let sexo = prompt("Digite se você é do sexo masculino ou feminino: ")
let pesoIdeal = 0

if (sexo = "masculino"){
    pesoIdeal = (72.7 * altura) - 58
    alert(`Olá ${nome}, você é do sexo ${sexo} e seu peso ideal é de ${pesoIdeal} `)
} else if (sexo = "feminino"){
    pesoIdeal = (62.1 * altura) - 44.7
    alert(`Olá ${nome}, você é do sexo ${sexo} e seu peso ideal é de ${pesoIdeal} `)
} else{
    alert("Digite um sexo válido")
}