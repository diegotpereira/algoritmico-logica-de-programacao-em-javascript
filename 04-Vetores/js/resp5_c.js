let candidatos = []
let btnAdicionar = document.getElementById('btAdicionar')
let btnListar = document.getElementById('btListar')
let btnAprovados = document.getElementById('btAprovados')

function adicionarCandidato() {
    let inCandidato = document.getElementById('inCandidato')
    let inAcertos = document.getElementById('inAcertos')
    let candidato = inCandidato.value
    let acertos = Number(inAcertos.value)

    if (candidato == '' || acertos == '' || isNaN(acertos)) {
        alert('Insira os dados corretamente.')
        inCandidato.focus()

        return
    }
    candidatos.push({ nome: candidato, acertos: acertos })

    inCandidato.value = ''
    inAcertos.value = ''
    inCandidato.focus()

    let lista = ''

    for (index = 0; index < candidatos.length; index++) {
        lista += `${candidatos[index].nome} - ${candidatos[index].acertos} acertos \n`
    }

    document.getElementById('saidaLista').textContent = lista
}
btnAdicionar.addEventListener('click', adicionarCandidato)


function listarCandidato() {
    let listaGeral = ''

    for (index = 0; index < candidatos.length; index++) {
        listaGeral += `${candidatos[index].nome} - ${candidatos[index].acertos} acertos \n`
    }

    document.getElementById('saidaLista').textContent = listaGeral
}
btnListar.addEventListener('click', listarCandidato)

function mostrarAprovados() {
    let notaCorte = Number(prompt('Insira o número de acertos para aprovação: '))
    let listaAprovados = ''
    let aprovados = 0

    candidatos.sort(function(a, b) { return b.acertos - a.acertos })

    for (index = 0; index < candidatos.length; index++) {
        if (candidatos[index].acertos >= notaCorte) {
            listaAprovados += `${candidatos[index].nome} - ${candidatos[index].acertos} acertos \n`
            aprovados += 1
            document.getElementById('saidaLista').textContent = listaAprovados
        }
    }
    if (aprovados == 0) {
        document.getElementById('saidaLista').textContent = 'Nenhum candidato foi aprovado.'
    }
}
btnAprovados.addEventListener('click', mostrarAprovados)