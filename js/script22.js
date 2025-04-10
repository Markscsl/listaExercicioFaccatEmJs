alert("Descobrir o salário do funcionário")

let horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas que foram trabalhadas: "))
let salarioPorHora = parseFloat(prompt("Digite o salario que o funcionário recebe por hora: "))

let salarioTotal = horasTrabalhadas * salarioPorHora

if (horasTrabalhadas < 161){
    alert("O salário do funcionário é de: "+salarioTotal)
} else{
    salarioHoraExtra = 160 * salarioPorHora + (horasTrabalhadas - 160) * (salarioPorHora * 50 / 100 + salarioPorHora) 
    alert("O salário do funcionário com horas extras é de: " +salarioHoraExtra)
}