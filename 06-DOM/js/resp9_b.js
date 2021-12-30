let btnExibir = document.getElementById('btExibir')

function exibirPartes() {
    let inNome = document.getElementById('inNome')
    let nome = inNome.value
    let divExibir = document.getElementById('divExibir')
    let listaH3 = document.getElementsByTagName('h3')

    for (let index = listaH3.length - 1; index >= 0; index--) {
        divExibir.removeChild(listaH3[index])
    }

    if (nome == '' || nome.indexOf(' ') == -1) {
        alert('Por favor, preencha o campo nome!')
        inNome.focus()

        return
    }
    partes = nome.split(' ')
    let cores = ['azul', 'vermelho', 'amarelo', 'verde', 'laranja']
    let corSorteada = ''

    for (let index = 0; index < partes.length; index++) {
        h3 = document.createElement('h3')
        texto = document.createTextNode(partes[index])
        h3.appendChild(texto)
        corSorteada = Math.floor(Math.random() * 5)
        h3.style.color = cores[corSorteada]
        divExibir.appendChild(h3)
    }
}
btnExibir.addEventListener('click', exibirPartes)