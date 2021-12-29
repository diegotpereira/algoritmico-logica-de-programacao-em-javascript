const inputPrecoPorMin = document.getElementById('inputPrecoPorMin')
const inputTempoDeUso = document.getElementById('inputTempoDeUso')
const btnCalcular = document.getElementById('btnCalcular')
const saidaResultado = document.getElementById('saidaResultado')

function calcularPreco() {
    let precoPorMinuto = Number(inputPrecoPorMin.value)
    let tempoDeUso = Number(inputTempoDeUso.value)
    let tempoTotalDeUso = Math.ceil(tempoDeUso / 15)
    let valorTotal = (precoPorMinuto * tempoTotalDeUso).toFixed(2)

    saidaResultado.textContent = `O valor á pagar: R$ ${valorTotal}`
}

btnCalcular.addEventListener('click', calcularPreco)