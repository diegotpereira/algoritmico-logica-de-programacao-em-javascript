const inputCarro = document.getElementById('inputCarro')
const inputPreco = document.getElementById('inputPreco')
const btnCalcularPreco = document.getElementById('btnCalcularPreco')
const saidaNomeDoCarro = document.getElementById('saidaNomeDoCarro')
const saidaValorDaEntrada = document.getElementById('saidaValorDaEntrada')
const saidaValorDasParcelas = document.getElementById('saidaValorDasParcelas')

function calcularPreco() {
    let nomeDoCarro = inputCarro.value
    let precoDoCarro = Number(inputPreco.value)
    let valorDeEntrada = (precoDoCarro * 0.3).toFixed(2)
    let valorDasParcelas = ((precoDoCarro - valorDeEntrada) / 12).toFixed(2)

    saidaNomeDoCarro.textContent = nomeDoCarro
    saidaValorDaEntrada.textContent = `R$ ${valorDeEntrada}`
    saidaValorDasParcelas.textContent = `12 parcelas de: R$ ${valorDasParcelas}`
}

btnCalcularPreco.addEventListener('click', calcularPreco)