let btnGerar = document.getElementById('btGerar')

function gerarCracha() {
    let inNome = document.getElementById('inNome')
    let saidaCracha = document.getElementById('saidaCracha')
    let nome = inNome.value

    if (nome == '' || nome.indexOf(' ') == -1) {
        alert('Informe o nome completo do participante')
        inNome.focus()

        return
    }
    // O método indexOf() retorna o índice da primeira ocorrência 
    // do valor fornecido em searchValue, começando a busca a partir 
    // de fromIndex. Retorna -1 se o valor não for encontrado.
    let priEspaco = nome.indexOf(' ')
        // O método lastIndexOf() retorna o índice da última ocorrência 
        // do valor especificado encontrado na String. Quando fromIndex 
        // é especificado, a pesquisa é realizada de trás para frente. 
        // Retorna -1 se o valor não for encontrado.
    let ultEspaco = nome.lastIndexOf(' ')
    let cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    saidaCracha.textContent = 'Crachá: ' + cracha
}
btnGerar.addEventListener('click', gerarCracha)