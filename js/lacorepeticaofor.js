alert("Tabuada")

let tabuada = parseInt(prompt("Digite um número para saber sua tabuada até o 10: "))

for (let contadora = 1; contadora < 11; contadora = contadora + 1){
    let total = tabuada * contadora
    console.log(`${tabuada} * ${contadora} = ${total}`) 
}