const inputCrianca = document.getElementById('inputCrianca')
const inputIdade = document.getElementById('inputIdade')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')
const saidaLista = document.getElementById('saidaLista')

let criancas = []

function adicionarBrinquedo() {
    let nome = inputCrianca.value
    let idade = Number(inputIdade.value)

    if (nome == '' || idade == 0 || idade == '' || isNaN(idade)) {
        alert('Por favor, preencha os campos corretamente')
        inputCrianca.value = ''
        inputIdade.value = ''
        inputCrianca.focus()

        return
    }

    criancas.push({ nome: nome, idade: idade })

    inputCrianca.value = ''
    inputIdade.value = ''
    inputCrianca.focus()

    listarCriancas()

}

function listarCriancas() {
    // Verifica se array está vazio
    if (criancas.length == 0) {
        alert('Não há crianças cadastradas!')

        return
    }

    let lista = ''

    for (let index = 0; index < criancas.length; index++) {
        lista += `${criancas[index].nome} - ${criancas[index].idade} anos \n`
    }

    saidaLista.textContent = lista
}

btnListar.addEventListener('click', listarCriancas)

function filtrarCriancas() {

}

function filtrarCriancasPorIdade() {
    if (criancas.length == 0) {
        alert('Não há crianças na lista!')

        return
    }
    let copia = criancas.slice()
        // O método sort() ordena os 
        // elementos do próprio array e 
        // retorna o array.
    copia.sort(function(a, b) {
        return a.idade - b.idade
    })
    let resumo = ''
    let menorIdade = copia[0].idade
    let nomes = []

    for (let index = 0; index < copia.length; index++) {
        if (copia[index].idade == menorIdade) {
            nomes.push(copia[index].nome)
        } else {
            resumo += `${menorIdade} ano(s): ${nomes.length} crianças - `
                // O método toFixed() formata um número utilizando notação de ponto fixo.
            resumo += `${(nomes.length / copia.length * 100).toFixed(2)} % \n`
            resumo += `(${nomes.join(', ')}) \n\n`
            menorIdade = copia[index].idade
            nomes = []
            nomes.push(copia[index].nome)
        }
    }

    resumo += `${menorIdade} ano(s): ${nomes.length} crianças - `
        // O método toFixed() formata um número utilizando notação de ponto fixo.
    resumo += `${(nomes.length / copia.length * 100).toFixed(2)} % \n`
    resumo += `(${nomes.join(', ')}) \n\n`

    saidaLista.textContent = resumo
}
btnFiltrar.addEventListener('click', filtrarCriancasPorIdade)