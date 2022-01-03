let lista = ""
let saidaLista = document.getElementById('saidaLista')
let btnAdicionar = document.getElementById('btAdicionar')
let btnLimpar = document.getElementById('btLimpar')

function adicionarProduto() {
    let inProduto = document.getElementById('inProduto')
    let produto = inProduto.value

    if (produto == "") {
        alert('Informe um produto para ser adicionado á lista')
        inProduto.focus()

        return
    }

    produtos = []
    produtos.push(produto)

    for (let index = 0; index < produtos.length; index++) {
        lista += produtos[index] + "\n"
    }
    inProduto.value = ""
    inProduto.focus()
    saidaLista.innerHTML = lista
}
btnAdicionar.addEventListener('click', adicionarProduto)

function limparLista() {
    if (confirm('Confirma exclusão de todos os itens da lista')) {
        produtos = ""
        saidaLista.innerHTML = ""
        location.reload()
        inProduto.focus()

    }
}
btnLimpar.addEventListener('click', limparLista)