let inServico = document.getElementById('inServico')
let saidaPendente = document.getElementById('saidaPendente')
let saidaExecucao = document.getElementById('saidaExecucao')
let servicos = []
let pendentes = 0

let btnAdicionar = document.getElementById('btAdicionar')
let btnExecutar = document.getElementById('btExecutar')

function validarServico(servico) {
    if (servico == "") {
        alert('Digite um serviço')
        inServico.focus()

        return false
    } else {

        return true
    }
}

function adicionarServico() {
    let servico = inServico.value

    if (validarServico(servico)) {
        servicos.push(servico)

        pendentes = servicos.length

        saidaPendente.innerHTML = `Serviçoes pendentes: ${pendentes}`
    }

    inServico.value = ""
    inServico.focus()
}
btnAdicionar.addEventListener('click', adicionarServico)

function executarServico() {
    let servico = inServico.value

    for (let index = servicos.length; index >= 0; index--) {
        saidaExecucao.textContent = `Serviço em execução: ${servicos[index]}`
    }

    servicos.shift(servico)

    let pendentes = servicos.length

    if (pendentes > 0) {
        saidaPendente.innerHTML = `Serviços pendentes: ${pendentes}`
    } else {
        saidaPendente.innerHTML = `Serviços pendentes:`
    }
}
btnExecutar.addEventListener('click', executarServico)