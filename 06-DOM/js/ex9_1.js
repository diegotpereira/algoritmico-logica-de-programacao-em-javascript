let btnAdicionar = document.getElementById('btAdicionar')
let btnGravar = document.getElementById('btGravar')
let btnSelecionar = document.getElementById('btSelecionar')
let btnRetirar = document.getElementById('btRetirar')

// Função adicionar Tarefa na lista
function adicionarTarefa() {
    let inTarefa = document.getElementById('inTarefa')
    let tarefa = inTarefa.value

    if (tarefa == '') {
        alert('Por favor, informe a tarefa')
        inTarefa.focus()

        return
    }

    let divQuadro = document.getElementById('divQuadro')
    let h5 = document.createElement('h5')
    let texto = document.createTextNode(tarefa)
    h5.appendChild(texto)
    divQuadro.appendChild(h5)

    inTarefa.value = ''
    inTarefa.focus()
}

btnAdicionar.addEventListener('click', adicionarTarefa)


// Função para recupera tarefa e exibir na lista
function recuperarTarefa() {
    if (localStorage.getItem('tarefasDia')) {
        let tarefas = localStorage.getItem('tarefasDia').split(';')
        let divQuadro = document.getElementById('divQuadro')

        for (let index = 0; index < tarefas.length; index++) {
            let h5 = document.createElement('h5')
            let texto = document.createTextNode(tarefas[index])
            h5.appendChild(texto)
            divQuadro.appendChild(h5)
        }

    }
}
recuperarTarefa()

// Função para salvar item no localStorage
function gravarTarefas() {
    let h5 = document.getElementsByTagName('h5')
    let numH5 = h5.length

    if (numH5 == 0) {
        alert('Ainda não há tarefas para serem salvas!')
    }
    let tarefas = ''

    for (let index = 0; index < numH5; index++) {
        tarefas += h5[index].textContent + ";"
    }

    localStorage.setItem('tarefasDia', tarefas.substr(0, tarefas.length - 1))

    if (localStorage.getItem('tarefasDia')) {
        alert('Ok! As tarefas foram salvas.')
    }
}
btnGravar.addEventListener('click', gravarTarefas)


// Função para selecionar tarefa na lista
function selecionarTarefa() {
    let h5 = document.getElementsByTagName('h5')
    let numH5 = h5.length

    if (numH5 == 0) {
        alert('Não há tarefas para selecionar')

        return
    }

    let aux = -1

    for (let index = 0; index < numH5; index++) {
        if (h5[index].className == 'tarefaSelecionada') {
            h5[index].className == 'tarefaNormal'

            aux = index

            break
        }
    }

    if (aux == numH5 - 1) {
        aux = -1
    }

    h5[aux + 1].className = 'tarefaSelecionada'
}
btnSelecionar.addEventListener('click', selecionarTarefa)

// Função para excluir tarefa da lista
function retirarSelecionada() {
    let divQuadro = document.getElementById('divQuadro')
    let h5 = document.getElementsByTagName('h5')
    let numH5 = h5.length
    let aux = -1

    for (let index = 0; index < numH5; index++) {
        if (h5[index].className == 'tarefaSelecionada') {
            aux = index

            break
        }
    }
    if (aux == -1) {
        alert('Selecione uma tarefa para remover')

        return
    }

    if (confirm(`Confirma a exclusão de ${h5[aux].textContent}`)) {
        divQuadro.removeChild(h5[aux])
    }
}
btnRetirar.addEventListener('click', retirarSelecionada)