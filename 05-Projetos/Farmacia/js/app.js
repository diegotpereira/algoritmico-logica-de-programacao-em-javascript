const inputMedicamento = document.getElementById('inputMedicamento')
const inputPrecoDoMedicamento = document.getElementById('inputPrecoDoMedicamento')
const btnPreco = document.getElementById('btnPreco')
const saidaNomeDoMedicamento = document.getElementById('saidaNomeDoMedicamento')
const saidaPrecoDaPromocao = document.getElementById('saidaPrecoDaPromocao')

function promocaoCelular() {
    let medicamento = inputMedicamento.value
    let precoDoMedicamento = Number(Math.floor(inputPrecoDoMedicamento.value) * 2)

    saidaNomeDoMedicamento.textContent = `Promoção de ${medicamento}`
    saidaPrecoDaPromocao.textContent = `Leve 2 por R$ ${precoDoMedicamento}`
}

btnPreco.addEventListener('click', promocaoCelular)