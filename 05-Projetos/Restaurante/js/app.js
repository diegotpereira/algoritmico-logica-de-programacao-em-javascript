const inputPrecoPorQuilo = document.getElementById('inputPrecoPorQuilo');
const inputPeso = document.getElementById('inputPeso');
const btnPreco = document.getElementById('btnPreco');
const saidaTotalAPagar = document.getElementById('saidaTotalAPagar');

function calcularPreco() {
    let preco = Number(inputPrecoPorQuilo.value).toFixed(2)
    let peso = Number(inputPeso.value / 1000)
    let valorTotal = (preco * peso).toFixed(2)

    saidaTotalAPagar.textContent = `Total à Pagar: R$ ${valorTotal}`
}

btnPreco.addEventListener('click', calcularPreco)