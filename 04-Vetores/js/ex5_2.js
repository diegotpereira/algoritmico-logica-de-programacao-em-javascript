let erros = []
let sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6
let btnApostar = document.getElementById('btApostar')
let btnJogar = document.getElementById('btJogar')

function apostarNumero() {
    let inNumero = document.getElementById('inNumero')
    let numero = Number(inNumero.value)

    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert('Escolha um número válido')
        inNumero.focus()

        return
    }
    let saidaDica = document.getElementById('saidaDica')
    let saidaErros = document.getElementById('saidaErros')
    let saidaChances = document.getElementById('saidaChances')

    if (numero == sorteado) {
        alert('Parabéns! Você acertou!')
        btnApostar.disabled = true
        btnJogar.className = 'exibe'
        saidaDica.textContent = 'Parabéns! Número sorteado: ' + sorteado
    } else {
        if (erros.indexOf(numero) >= 0) {
            alert(`Você já apostou o número ${numero}. tente outro!`)
        } else {
            erros.push(numero)

            let numErros = erros.length
            let numChances = CHANCES - numErros
            saidaErros.textContent = `${numErros} ( ${erros.join(", ")})`
            saidaChances.textContent = numChances

            if (numChances == 0) {
                alert('Suas chances acabaram')
                btnApostar.disabled = true
                btnJogar.className = 'exibe'
                saidaDica.textContent = `Game Over!! Número Sorteado: ${sorteado}.\n Mas não se preocupe; para todo Game Over, existe um Play Again!`

            } else {
                let dica = numero < sorteado ? 'maior' : 'menor'
                saidaDica.textContent = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    inNumero.value = ''
    inNumero.focus()
}
btnApostar.addEventListener('click', apostarNumero)

function jogarNovamente() {
    location.reload()
}

btnApostar.addEventListener('click', jogarNovamente)