const inputClube = document.getElementById('inputClube')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnTabela = document.getElementById('btnTabela')
const saidaLista = document.getElementById('saidaLista')

let todosClubes = []

function adicionarClube() {
    let clube = inputClube.value

    // valida o preechimento, adiciona um clube ao array e 
    // lista os clubes
    if (clube == '') {
        alert('Por favor, preecha o campo corretamente!')
        inputClube.value = ''
        inputClube.focus()

        return
    }
    todosClubes.push(clube)
    inputClube.value = ''
    inputClube.focus()

    listarClube()
}

btnAdicionar.addEventListener('click', adicionarClube)

function listarClube() {
    if (todosClubes.length == 0) {
        alert('Não há clubes na lista!')

        return
    }

    let listaDeClubes = ''

    for (let index = 0; index < todosClubes.length; index++) {
        listaDeClubes += `${index + 1}. ${todosClubes[index]}\n`
    }
    saidaLista.textContent = listaDeClubes
}

btnListar.addEventListener('click', listarClube)

function mostrarTabela() {
    let jogos = ''
    let ultimoClube = todosClubes[todosClubes.length - 1]

    if ((todosClubes.length % 2) !== 0 || todosClubes.length == 0) {
        alert('Adicione mais um clube para montar a tabela de jogos!')
        inputClube.focus()

        return
    }

    for (let index = 0; index < (todosClubes.length - 1) / 2; index++) {
        jogos += `${todosClubes[index]} x ${ultimoClube - index}\n`
    }

    saidaLista.textContent = jogos
}

btnTabela.addEventListener('click', mostrarTabela)