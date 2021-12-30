let btnAdicionar = document.getElementById('btAdicionar')
let btnMontarTabela = document.getElementById('btMontar')
let btnNovos = document.getElementById('btNovos')


let clubes = []

// Função adicionar clube
function adicionarClube() {
    let inClube = document.getElementById('inClube')
    let clube = inClube.value

    if (clube == '') {
        alert('Por favor, inserira um nome de clube!')
        inClube.focus()

        return
    }
    clubes.push(clube)

    let h5 = document.createElement('h5')
    let texto = document.createTextNode(clube)
    h5.appendChild(texto)
    divExibir.appendChild(h5)
    inClube.value = ''
    inClube.focus()
}
btnAdicionar.addEventListener('click', adicionarClube)

let divExibir = document.getElementById('divExibir')
    // Função Montar Tabela
function montarTabela() {
    let listaH5 = document.getElementsByTagName('h5')

    if (listaH5.length % 2 != 0) {
        alert('Impossível montar Tabela (número ímpar de clubes!)')
        inClube.focus()

        return
    }
    let tabela = document.getElementById('tabela')
    let linha
    let col1
        // let col2

    for (let index = 0; index < clubes.length; index++) {
        if (index % 2 == 0) {
            linha = tabela.insertRow(-1)
            col1 = linha.insertCell(0)
            col1.textContent = clubes[index]
        } else {
            let col2 = linha.insertCell(1)
            col2.textContent = clubes[index]
        }
    }
    // btnAdicionar.disabled = true
    // btnMontarTabela.disabled = true
}
btnMontarTabela, addEventListener('click', montarTabela)

// Função limpar campo novo clube
btnNovos.addEventListener('click', function() {
    location.reload()
})