let carros = []
let btnAdicionar = document.getElementById('btAdicionar')
let btnListar = document.getElementById('saidaLista')
let btnFiltrar = document.getElementById('btFiltrar')

function adicionarCarros() {
    let inModelo = document.getElementById('inModelo')
    let inPreco = document.getElementById('inPreco')
    let modelo = inModelo.value
    let preco = Number(inPreco.value)

    if (modelo == '' || preco == 0 || isNaN(preco)) {
        alert('Por favor, preencha os campos corretamente!')
        inModelo.focus()

        return
    }
    carros.push({ modelo: modelo, preco: preco })

    inModelo.value = ''
    inPreco.value = ''
    inModelo.focus()

    listarCarros()
}
btnAdicionar.addEventListener('click', adicionarCarros)

function listarCarros() {
    if (carros.length == 0) {
        alert('Não há carros na lista')

        return
    }

    let lista = ''

    for (let index = 0; index < carros.length; index++) {
        lista += carros[index].modelo + " - R$ " + carros[index].preco.toFixed(2) + "\n"
    }

    document.getElementById('saidaLista').textContent = lista
}
btnListar.addEventListener('click', listarCarros)

function filtrarCarros() {
    let maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))

    if (maximo == 0 || isNaN(maximo)) {

        return
    }

    let lista = ''

    for (let index = 0; index < carros.length; index++) {
        if (carros[index].preco <= maximo) {
            lista += carros[index].modelo = " - R$: " + carros[index].preco.toFixed(2) + "\n"
        }
    }

    let saidaLista = document.getElementById('saidaLista')

    if (lista == 0) {
        saidaLista.textContent = 'Não há carros com preço até R$ ' + maximo.toFixed(2)
    } else {
        saidaLista.textContent = 'Carros até R$ ' + maximo.toFixed(2) + '\n-----------\n' + lista
    }
}
btnFiltrar.addEventListener('click', filtrarCarros)