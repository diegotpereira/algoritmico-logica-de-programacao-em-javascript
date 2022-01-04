let palavra = prompt('Palavra: ')
let tam = palavra.length
let inverso = palavra.charAt(tam - 1).toUpperCase()

for (let index = tam - 2; index >= 0; index--) {
    inverso += palavra.charAt(index).toLowerCase()
}

alert(`Palavra: ${palavra}
       Invertida: ${inverso}`)