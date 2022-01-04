let btnPalin = document.getElementById('btPalin')

function palidromo() {
    let inFrase = document.getElementById('inFrase')
    let saidaResposta = document.getElementById('saidaResposta')
    let frase = inFrase.value

    if (frase == '') {
        alert('Informe a palavra ou frase a ser verificada.')
        inFrase.focus()

        return
    }
    let fraseMaiusc = frase.toUpperCase()
    let fraseSemEspaco = ''

    if (frase.indexOf('') != 1) {
        fraseSemEspaco = fraseMaiusc.replace(/ /g, "")
    } else {
        fraseSemEspaco = fraseMaiusc
    }

    let tamanho = fraseSemEspaco.length
    let metade = Math.floor(tamanho / 2)
    let semelhancas = 0
    let tam = tamanho

    for (let index = 0; index < metade; index++) {
        if (fraseSemEspaco.charAt(index) == fraseSemEspaco.charAt(tam - 1)) {
            semelhancas++
        }
        tam--
    }

    if (semelhancas == metade) {
        saidaResposta.textContent = `${fraseMaiusc} é um palídromo!`
    } else {
        saidaResposta.textContent = `${fraseMaiusc} não é um palídromo!`
    }
}
btnPalin.addEventListener('click', palidromo)