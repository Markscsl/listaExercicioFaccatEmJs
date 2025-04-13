const idade = 16

switch (true) {
    case (idade < 16):
        alert("Não pode votar")
        break

    case (idade < 18):
        alert("Voto opcional")
        break

    default:
        alert("Voto obrigatório")
        break
}