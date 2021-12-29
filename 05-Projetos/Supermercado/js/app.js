const inputProduto = document.getElementById('inputProduto');
const inputPrecoDoProduto = document.getElementById('inputPrecoDoProduto');
const btnPreco = document.getElementById('btnPreco');
const saidaPromocao = document.getElementById('saidaPromocao');
const saidaPrecoDoProduto3 = document.getElementById('saidaPrecoDoProduto3');

function calcularPreco() {
    let nomeDoProduto = inputProduto.value
    let precoDoProduto = Number(inputPrecoDoProduto.value)
    let precoDaPromocao = ((precoDoProduto * 2) + (precoDoProduto * 0.5)).toFixed(2)
    let precoDoProduto3 = (precoDoProduto * 0.5).toFixed(2)

    saidaPromocao.textContent = `${nomeDoProduto} - Promoção: Leve 2 por : R$ ${precoDaPromocao}`
    saidaPrecoDoProduto3.textContent = `O 3º produto sai por: R$ ${precoDoProduto3}`
}

btnPreco.addEventListener('click', calcularPreco)