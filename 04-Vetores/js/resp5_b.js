let numeros = []

let btnAdicionar = document.getElementById('btAdicionar')
let btnVerificar = document.getElementById('btVerificar')

function adicionarNumeros() {
    let inNumero = document.getElementById('inNumero')
    let num = Number(inNumero.value)

    if (num == '' || isNaN(num)) {
        alert('Por favor, informe um número válido!')
        inNumero.focus()

        return
    }

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] == num) {
            alert('Não é permitido repetir números! Insira outro valor!')
            inNumero.focus()

            return
        }
    }
    numeros.push(num)
    inNumero.value = ''
    inNumero.focus()

    document.getElementById('saidaNumeros').textContent = `Números: ${numeros.join(", ")}`
}
btnAdicionar.addEventListener('click', adicionarNumeros)

function verificarOrdem() {
    for (let index = 0; index < numeros.length - 1; index++) {
        if (numeros[index] < numeros[index + 1]) {
            document.getElementById('saidaOrdem').textContent = 'Os números estão em ordem crescente.'
        } else {
            document.getElementById('saidaOrdem').textContent = 'Os números não estão em ordem crescente.'
        }
    }
}
btnVerificar.addEventListener('click', verificarOrdem)