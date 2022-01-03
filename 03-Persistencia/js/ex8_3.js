var btnApostar = document.getElementById('btApostar')
var btnVencedor = document.getElementById('btVencedor')
var btnLimpar = document.getElementById('btLimpar')

function incluirAposta() {
    var inNome = document.getElementById('inNome')
    var inPeso = document.getElementById('inPeso')
    var nome = inNome.value
    var peso = Number(inPeso.value)

    if (nome = "" || peso == 0 || isNaN(peso)) {
        alert('Por favor, preencha todos os campos.')
        inNome.focus()

        return
    }

    if (verApostaExiste(peso)) {
        alert('Alguém já apostou esse peso, tente outro novamente...')
        inPeso.focus()

        return
    }
    if (localStorage.getItem('melanciaNome')) {
        var melanciaNome = localStorage.getItem('melanciaNome') + ';' + nome
        var melanciaPeso = localStorage.getItem('melanciaPeso') + ';' + nome

        localStorage.setItem('melanciaNome', melanciaNome)
        localStorage.setItem('melanciaPeso', melanciaPeso)
    } else {
        localStorage.setItem('melanciaNome', nome)
        localStorage.setItem('melanciaPeso', peso)
    }

    mostrarApostas()
    inNome.value = ""
    inPeso.value = ""
    inNome.focus()

}
btnApostar.addEventListener('click', incluirAposta)


function verApostaExiste() {
    var existe = false

    if (localStorage.getItem('melanciaPeso')) {
        var pesos = localStorage.getItem('melanciaPeso').split(';')

        if (pesos.indexOf(peso.toString()) >= 0) {
            existe = true
        }
    }
    return existe
}

function mostrarApostas() {
    var saidaApostas = document.getElementById('saidaApostas')

    if (!localStorage.getItem('melanciaNome')) {
        saidaApostas.textContent = ''

        return
    }
    var nomes = localStorage.getItem('melanciaNome').split(';')
    var pesos = localStorage.getItem('melanciaPeso').split(';')
    var linhas = ''

    for (var index = 0; index < nomes.length; index++) {
        linhas += `${nomes[index]} - ${pesos[index]} gr \n`
    }

    saidaApostas.innerText = linhas
}

mostrarApostas()

function verificarVencedor() {
    if (!localStorage.getItem('melanciaNome')) {
        alert('Não há apostas cadastradas')

        return
    }

    var pesoCorreto = Number(prompt('Qual é o peso correto da Melancia?'))

    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {

        return
    }

    var nomes = localStorage.getItem('melanciaNome').split(';')
    var pesos = localStorage.getItem('melanciaPeso').split(';')
    var vencedorNome = nomes[0]
    var vencedorPeso = Number(pesos[0])

    for (var index = 1; index < nomes.length; index++) {
        difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        difAposta = Math.abs(Number(pesos[index]) - pesoCorreto)

        if (difAposta < difVencedor) {
            vencedorNome = nomes[index]
            vencedorPeso = pesos[index]
        }
    }

    var mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`
    mensagem += '\n-------------------------------------------'
    mensagem += `\nVencedor: ${vencedorNome}\nAposta: ${vencedorPeso}gr`
    alert(mensagem)
}

btnVencedor.addEventListener('click', verificarVencedor)

function limparApostas() {
    if (confirm('Confirma exclusão de todas as apostas?')) {
        localStorage.removeItem('melanciaNome')
        localStorage.removeItem('melanciaPeso')

        mostrarApostas()
    }
}

btnLimpar.addEventListener("click", limparApostas)