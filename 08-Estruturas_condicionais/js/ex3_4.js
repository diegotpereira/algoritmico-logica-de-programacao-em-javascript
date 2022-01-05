let btnExibir = document.getElementById('btExibir')


function fusoHorario() {
    let inHora = document.getElementById('inHora')
    let saidaFranca = document.getElementById('saidaFranca')
    let hora = Number(inHora.value)

    if (hora == '' || isNaN(hora)) {
        alert('Por favor, informe a hora no Brasil corretamente!')
        inHora.focus()

        return
    }
    let horaFranca = hora + 5

    if (horaFranca > 24) {
        horaFranca -= 24
    }
    saidaFranca.textContent = `Hora na Fraça: ${horaFranca.toFixed(2)}`
}
btnExibir.addEventListener('click', fusoHorario)