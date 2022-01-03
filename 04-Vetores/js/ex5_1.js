let pacientes = []
let btnAdicionar = document.getElementById('btAdicionar')
let btnAtender = document.getElementById('btAtender')
let btnUrgencia = document.getElementById('btUrgencia')

function adicionarPaciente() {
    let inPaciente = document.getElementById('inPaciente')
    let saidaLista = document.getElementById('saidaLista')
    let nome = inPaciente.value

    if (nome == "") {
        alert('Informe o nome do paciente')
        inPaciente.focus()

        return
    }

    pacientes.push(nome)

    let lista = ''

    for (index = 0; index < pacientes.length; index++) {
        lista += `${index + 1}. ${pacientes[index]}\n`
    }

    saidaLista.textContent = lista
    inPaciente.value = ''
    inPaciente.focus()

}
btnAdicionar.addEventListener('click', adicionarPaciente)


function pacienteUrgencia() {
    let inPaciente = document.getElementById('inPaciente')
    let saidaLista = document.getElementById('saidaLista')
    let nome = inPaciente.value

    if (nome == '') {
        alert('Por favor, informe o nome do paciente')
        inPaciente.focus()

        return
    }
    pacientes.unshift(nome)

    let lista = ''

    for (index = 0; index < pacientes.length; index++) {
        lista += `${index + 1}. ${pacientes[index]}\n`
    }

    saidaLista.textContent = lista

    inPaciente.value = ''
    inPaciente.focus()
}
btnUrgencia.addEventListener('click', pacienteUrgencia)

function atenderPaciente() {
    if (pacientes.length == 0) {
        alert('Não há pacientes na lista de espera')
        inPaciente.focus()

        return
    }
    let saidaAtendimento = document.getElementById('saidaAtendimento')
    let saidaLista = document.getElementById('saidaLista')
    let atender = pacientes.shift()

    saidaAtendimento.textContent = `${atender}`

    let lista = ''

    for (index = 0; index < pacientes.length; index++) {
        lista += `${index + 1}. ${pacientes[index]}\n`
    }

    saidaLista.textContent = lista
}

btnAtender.addEventListener('click', atenderPaciente)