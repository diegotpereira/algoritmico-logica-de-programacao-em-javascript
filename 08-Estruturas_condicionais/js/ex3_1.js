let btnResultado = document.getElementById('btResultado')


function calcularMedia() {
    let inNome = document.getElementById('inNome')
    let inNota1 = document.getElementById('inNota1')
    let inNota2 = document.getElementById('inNota2')
    let saidaSituacao = document.getElementById('saidaSituacao')
    let saidaMedia = document.getElementById('saidaMedia')
    let nome = inNome.value
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)
    let media = (nota1 + nota2) / 2

    saidaMedia.textContent = `Média das notas: ${media.toFixed(1)}`

    if (media >= 7) {
        saidaSituacao.textContent = `Parabéns ${nome}. Você foi aprovado(a).`
        saidaSituacao.style.color = 'green'
    } else if (media >= 4) {
        saidaSituacao.textContent = `Atenção ${nome}. Você está em exame.`
        saidaSituacao.style.color = 'yellow'
    } else {
        saidaSituacao.textContent = `Ops ${nome}. Você foi reprovado(a).`
        saidaSituacao.style.color = 'red'
    }
}
btnResultado.addEventListener('click', calcularMedia)