let btnGerar = document.getElementById('btGerar')


function gerarCitacao() {
    let inAutora = document.getElementById('inAutora')
    let saidaResposta = document.getElementById('saidaResposta')
    let autora = inAutora.value

    if (autora == '' || autora.indexOf(' ') == -1) {
        alert('Informe o nome completo do(a) autor(a)')
        inAutora.focus()

        return
    }
    let nomeCompleto = autora.split(' ')
    let tam = nomeCompleto.length
    let citacao = ''

    citacao += nomeCompleto[tam - 1].toUpperCase() + ', '

    for (let index = 0; index < tam - 1; index++) {
        citacao += nomeCompleto[index].charAt(0).toUpperCase() + '.'
    }

    saidaResposta.textContent = citacao
}
btnGerar.addEventListener('click', gerarCitacao)