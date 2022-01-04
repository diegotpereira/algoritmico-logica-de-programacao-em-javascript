let inMensagem = document.getElementById('inMensagem')
let saidaResposta = document.getElementById('saidaResposta')
let mensagem = ''

let btnDecriptografar = document.getElementById('btDecriptografar')
let btnCriptografar = document.getElementById('btCriptografar')

function criptografar() {
    let criptoPar = ''
    let criptoImpar = ''
    let criptoCompleta = ''

    mensagem = inMensagem.value

    for (index = 0; index < mensagem.length; index++) {
        if (index % 2 != 0) {
            criptoPar += mensagem.charAt(index)
        } else {
            criptoImpar += mensagem.charAt(index)
        }
    }
    criptoCompleta = criptoPar + criptoImpar
    saidaResposta.textContent = criptoCompleta
}
btnCriptografar.addEventListener('click', criptografar)

function decriptografar() {

    mensagem = inMensagem.value

    let msgTotal = ''
    let metade = 0

    if (mensagem.length % 2 == 0) {
        metade = mensagem.length / 2
    } else {
        metade = Math.floor(mensagem.length / 2)
    }

    let j = metade

    for (let index = 0; index < metade; index++) {
        msgTotal += mensagem.charAt(j)
        msgTotal += mensagem.charAt(index)

        j++
    }

    if (mensagem.length % 2 != 0) {
        msgTotal += mensagem.charAt(mensagem.length - 1)
    }

    saidaResposta.textContent = msgTotal
}
btnDecriptografar.addEventListener('click', decriptografar)