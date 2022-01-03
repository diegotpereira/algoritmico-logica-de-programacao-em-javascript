let criancas = []
let btnAdicionar = document.getElementById('btAdicionar')
let btnListar = document.getElementById('btListar')
let btnResumir = document.getElementById('btResumir')

function adicionarCriancas() {
    let inNome = document.getElementById('inNome')
    let inIdade = document.getElementById('inIdade')
    let nome = inNome.value
    let idade = Number(inIdade.value)

    if (nome == '' || idade == '' || isNaN(idade)) {
        alert('Por favor, preencha todos os campos.')
        inNome.focus()

        return
    }
    criancas.push({ nome: nome, idade: idade })

    inNome.value = ''
    inIdade.value = ''
    inNome.focus()

    listarCrianças()
}
btnAdicionar.addEventListener('click', adicionarCriancas)

function listarCrianças() {
    if (criancas.length == 0) {
        alert('Por favor, não há crianças na lista')

        return
    }
    let lista = ''

    for (let index = 0; index < criancas.length; index++) {
        lista += criancas[index].nome + " - " + criancas[index].idade + " anos\n"
    }

    document.getElementById('saidaLista').textContent = lista
}

btnListar.addEventListener('click', listarCrianças)


function resumirLista() {
    if (criancas.length == 0) {
        alert('Não há crianças na lista')

        return
    }

    let copia = criancas.slice()

    copia.sort(function(a, b) { return a.idade - b.idade })

    let resumo = ''

    let aux = copia[0].idade
    let nomes = []

    for (let index = 0; index < copia.length; index++) {
        if (copia[index].idade == aux) {
            nomes.push(copia[index].nome)
        } else {
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = copia[index].idade
            nomes = []
            nomes.push(copia[index].nome)
        }
    }
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"

    document.getElementById('saidaLista').textContent = resumo
}
btnResumir.addEventListener('click', resumirLista)