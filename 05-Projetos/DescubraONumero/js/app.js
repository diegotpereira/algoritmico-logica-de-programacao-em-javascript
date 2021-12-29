const inputNumero = document.getElementById('inputNumero');
const btnApostar = document.getElementById('btnApostar');
const btnJogarNovamente = document.getElementById('btnJogarNovamente');
const saidaErros = document.getElementById('saidaErros');
const saidaChances = document.getElementById('saidaChances');
const saidaDica = document.getElementById('saidaDica');

let erros = []
let numeroGerado = Math.floor(Math.random() * 100) + 1
const numeroDeChances = 6

function apostarNumero() {
    let numeroApostado = Number(inputNumero.value)

    // checa a validade do número
    if (numeroApostado <= 0 || numeroApostado > 100 ||
        isNaN(numeroApostado)) {
        alert('Por favor, digite um número válido!')
        inputNumero.value = ''
        inputNumero.focus()

        return
    }

    // caso a pessoa acerte o número
    if (numeroApostado == numeroGerado) {
        alert('Parabéns você acertou o número!')
        btnApostar.disabled = true
        btnJogarNovamente.className = 'exibe'
        saidaDica.textContent = `O número sorteado foi: ${numeroGerado}`

        // caso não acerte, terá 2 opções:
        // o número de chances acabará ou
        // apostar um número repetido
    } else {
        // verifica se o número é repetido
        if (erros.indexOf(numeroApostado) >= 0) {
            alert(`Você já apostou o número ${numeroApostado}. Tente outro número!`)

            // atualiza as chances até acabar as tentativas do jogador
        } else {
            erros.push(numeroApostado)
            let numeroDeErros = erros.length
            let chancesRestantes = numeroDeChances - numeroDeErros

            saidaErros.textContent = `${numeroDeErros} (${erros.join(', ')})`
            saidaChances.textContent = chancesRestantes

            if (chancesRestantes == 0) {
                alert('Suas chances acabaram, reinicie o jogo para tentar novamente')
                btnApostar.disabled = true
                btnJogarNovamente.className = 'exibe'
                saidaDica.textContent = `Fim de Jogo! Número sorteado ${numeroGerado}`

                // da uma dica se o número é maior ou menor do que o apostado
            } else {
                let dica = numeroApostado < numeroGerado ? 'Maior' : 'Menor'
                saidaDica.textContent = `Dica: tente um número ${dica}`
            }
        }
    }
    inputNumero.value = ''
    inputNumero.focus()
}
btnApostar.addEventListener('click', apostarNumero)

function reiniciarJogo() {
    location.reload()
}
btnJogarNovamente.addEventListener('click', reiniciarJogo)