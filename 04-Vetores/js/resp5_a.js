let clubes = []

let btnAdicionar = document.getElementById('btAdicionar')
let btnListar = document.getElementById('btListar')
let btnMontar = document.getElementById('btMontar')

function adicionarClubes() {
    let inClube = document.getElementById('inClube')
    let clube = inClube.value

    if (clube == '') {
        alert('Por favor, preencha o campo clube.')
        inClube.focus()

        return
    }
    clubes.push({ nome: clube })

    inClube.value = ''
}
btnAdicionar.addEventListener('click', adicionarClubes)


function listarClubes() {
    let clubesString = ''

    if (clubes.length == 0) {
        alert('Não há clubes na lista')

        return
    }

    for (let index = 0; index < clubes.length; index++) {
        clubesString += `${index + 1}. ${clubes[index].nome}\n`
    }
    document.getElementById('saidaLista').textContent = clubesString
}
btnListar.addEventListener('click', listarClubes)


function montarTabela() {
    if (clubes.length % 2 != 0) {
        alert('Número ímpar de clubes. Não foi possível montar a tabela.')
        inClube.focus()

        return
    }

    let tabela = ''

    for (let index = 0; index < clubes.length / 2; index++) {
        tabela += `${clubes[index].nome } x ${clubes[clubes.length - 1 - index].nome}\n`
    }
    document.getElementById('saidaLista').textContent = tabela
}
btnMontar.addEventListener('click', montarTabela)