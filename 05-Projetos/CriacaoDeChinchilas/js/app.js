const inputChinchilas = document.getElementById('inputChinchilas')
const inputAno = document.getElementById('inputAno')
const btnChinchilas = document.getElementById('btnChinchilas')
const saidaChinchilas = document.getElementById('saidaChinchilas')

function mostrarPrevisao() {
    let numeroChinchilas = Number(inputChinchilas.value)
    let numeroDeAnos = Number(inputAno.value)
    let total = numeroChinchilas
    let quantidade = ''

    if (numeroChinchilas < 2 || numeroDeAnos == 0 ||
        isNaN(numeroChinchilas) || isNaN(numeroDeAnos)) {
        alert('Por favor preencha os campos corretamente!')
        inputChinchilas.value = ''
        inputAno.value = ''
        inputChinchilas.focus()

        return

    }

    for (let index = 1; index <= numeroDeAnos; index++) {
        quantidade += `${index}º Ano: ${total} Chinchilas.\n`
        total *= 3
    }

    saidaChinchilas.textContent = quantidade
}

btnChinchilas.addEventListener('click', mostrarPrevisao)