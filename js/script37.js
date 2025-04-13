alert("Calculo de maçãs e morangos")

let kgMorangos = parseFloat(prompt("Digite o valor em quilos de morangos comprados:  "))
let kgMacas = parseFloat(prompt("Digite o valor em quilos de maçãs compradas: "))

let precoMorango = 0
let precoMaca = 0

let pesoTotal = kgMacas + kgMorangos

if (kgMorangos <= 5) {
    precoMorango = 2.50
} else{
    precoMorango = 2.20
}

if (kgMacas <= 5){
    precoMaca = 1.80
} else {
    precoMaca = 1.50
}

let precoTotal = (precoMorango * kgMorangos) + (precoMaca * kgMacas)

if ((pesoTotal > 8) &&  (precoTotal > 25)){
    precoTotal *= 0.9
}

alert(`O valor a ser pago é de: ${precoTotal}`)