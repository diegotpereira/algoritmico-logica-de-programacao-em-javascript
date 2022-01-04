let btnGerar = document.getElementById('btGerar')


function gerarEmail() {
    let inFuncionario = document.getElementById('inFuncionario')
    let saidaEmail = document.getElementById('saidaEmail')
    let funcionario = inFuncionario.value

    if (funcionario == '' || funcionario.indexOf(' ') == -1) {
        alert('Informe o nome completo do funcionário')
        inFuncionario.focus()

        return
    }
    let partes = funcionario.split(' ')
    let email = ''
    let tam = partes.length

    for (let index = 0; index < tam - 1; index++) {
        email += partes[index].charAt(0)
    }

    email += partes[tam - 1] + "@empresa.com.br"
    saidaEmail.textContent = 'E-mail: ' + email.toLowerCase()
}
btnGerar.addEventListener('click', gerarEmail)