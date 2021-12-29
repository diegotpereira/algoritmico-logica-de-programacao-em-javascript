const inputFilme = document.getElementById('inputFilme')
const inputTempo = document.getElementById('inputTempo')
const btnConverter = document.getElementById('btnConverter')
const saidaFilme = document.getElementById('saidaFilme')
const saidaTempo = document.getElementById('saidaTempo')

function converterTempo() {
    let nomeDoFilme = inputFilme.value
    let tempoDoFilme = Number(inputTempo.value)
        // retorna a quantidade de horas
    let horasDeDuracao = Math.floor(tempoDoFilme / 60)
        // resto da divisão
    let minutosDeDuracao = tempoDoFilme % 60

    saidaFilme.textContent = nomeDoFilme
    saidaTempo.textContent = `${horasDeDuracao} horas(s) e ${minutosDeDuracao} minutos(s)`
}

btnConverter.addEventListener('click', converterTempo)