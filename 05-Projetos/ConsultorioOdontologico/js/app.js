const inputPaciente = document.getElementById('inputPaciente');
const btnConsulta = document.getElementById('btnConsulta');
const btnUrgencia = document.getElementById('btnUrgencia');
const btnAtender = document.getElementById('btnAtender');
const pacienteEmAtendimento = document.getElementById('pacienteEmAtendimento');
const saidaConsulta = document.getElementById('saidaConsulta');

let todosPacientes = []

function agendarConsulta() {
    let nomePaciente = inputPaciente.value


    if (nomePaciente == '') {
        alert('Por favor digite o nome do paciente!')
        inputPaciente.focus()

        return
    }

    todosPacientes.push(nomePaciente)
    let lista = ''

    for (let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;
    }

    saidaConsulta.textContent = lista
    inputPaciente.value = ''
    inputPaciente.focus()
}

btnConsulta.addEventListener('click', agendarConsulta)

function atendimentoPrioritario() {
    let nomePaciente = inputPaciente.value


    if (nomePaciente == '') {
        alert('Por favor digite o nome do paciente!')
        inputPaciente.focus()

        return
    }

    // O método unshift() adiciona um ou mais elementos 
    // no início de um array e retorna o número de elementos 
    // (propriedade length) atualizado.
    todosPacientes.unshift(nomePaciente)
    let lista = ''

    for (let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;
    }

    saidaConsulta.textContent = lista
    inputPaciente.value = ''
    inputPaciente.focus()
}

btnUrgencia.addEventListener('click', atendimentoPrioritario)

function atenderPaciente() {
    if (todosPacientes.length == 0) {
        alert('Não há pacientes para atender!')
        inputPaciente.focus()

        return
    }
    // O método shift()remove o primeiro elemento 
    // de um array e retorna esse elemento. 
    // Este método muda o tamanho do array.
    let atender = todosPacientes.shift()
    pacienteEmAtendimento.textContent = atender
    let lista = ''

    for (let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;
    }

    saidaConsulta.textContent = lista
}

btnAtender.addEventListener('click', atenderPaciente)