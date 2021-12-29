const inputCandidato = document.getElementById('inputCandidato')
const inputAcertos = document.getElementById('inputAcertos')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnAprovados = document.getElementById('btnAprovados')
const saidaAcertos = document.getElementById('saidaAcertos')

let candidatoAcertos = []

function adicionar() {
    let candidato = inputCandidato.value
    let acertos = Number(inputAcertos.value)

    if ((candidato == '') || (acertos == '') || isNaN(acertos)) {
        alert('Por favor, preencha os campos corretamente!')
        inputCandidato.focus()

        return
    }

    candidatoAcertos.push({ nome: candidato, acertos: acertos })

    inputCandidato.value = ''
    inputAcertos.value = ''
    inputCandidato.focus()

    listarCandidatos()
}
btnAdicionar.addEventListener('click', adicionar)

function listarCandidatos() {
    if (candidatoAcertos.length == 0) {
        alert('Não há nenhum candidato na lista!')

        return
    }
    let lista = ''

    for (let index = 0; index < candidatoAcertos.length; index++) {
        lista += `${index + 1}° - ${candidatoAcertos[index].nome} - ${candidatoAcertos[index].acertos} acertos\n`
    }
    saidaAcertos.textContent = lista
}

btnListar.addEventListener('click', listarCandidatos)

function listarAprovados() {
    if (candidatoAcertos.length == 0) {
        alert('Não há candidatos listados!')
        inputCandidato.focus()

        return
    }
    let acertosParaAprovar = Number(prompt('Os aprovados devem acertar pelo menos: '))

    if ((acertosParaAprovar == 0) || isNaN(acertosParaAprovar)) {
        alert('Por favor, digite um número válido!')

        return
    }
    // O método slice() retorna uma cópia de parte de um array 
    // a partir de um subarray criado entre as posições início 
    // e fim (fim não é necessário) de um array original. 
    // O Array original não é modificado.
    let copia = candidatoAcertos.slice()
        // O método sort() ordena os elementos do próprio array 
        // e retorna o array. 
    copia.sort(function(a, b) {
            return a.acertos - b.acertos
        })
        // O método reverse() inverte os itens de um array. 
        // O primeiro elemento do array se torna o último e 
        // o último torna-se o primeiro.
    copia.reverse()

    let aprovados = ''

    for (let index = 0; index < copia.length; index++) {
        if (copia[index].acertos >= acertosParaAprovar) {
            aprovados += `${index + 1}° Colocado - ${copia[index].nome} - ${copia[index].acertos} acertos\n`
        }
    }
    if (aprovados == '') {
        saidaAcertos.textContent = 'Não há aprovados no concurso!'
    } else {
        saidaAcertos.textContent = aprovados
    }
}

btnAprovados.addEventListener('click', listarAprovados)