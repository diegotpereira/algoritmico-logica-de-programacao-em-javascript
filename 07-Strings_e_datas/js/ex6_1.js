let anuncio = prompt('Anúncio: ')
let tam = anuncio.length
let numPalavras = 0

for (let index = 0; index < tam; index++) {
    if (anuncio.charAt(index) == ' ') {
        numPalavras++
    }
}
alert('Anúncio: ' + anuncio + 'nNº Palavras: ' + (numPalavras + 1))