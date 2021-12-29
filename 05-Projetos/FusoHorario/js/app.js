const inputHorario = document.getElementById('inputHorario')
const btnFuso = document.getElementById('btnFuso')
const saidaHoraNoFuso = document.getElementById('saidaHoraNoFuso')

function calcularFusoHorario() {
    let horario = Number(inputHorario.value)
        // calcula a hora com fuso + 5
    let horaFranca = (horario + 5).toFixed(2)

    if (inputHorario.value == '' || isNaN(horario)) {
        alert('Por favor, digite um horário válido!')
        inputHorario.focus()

        return
    }

    if (horaFranca > 24) {
        let horaFrancaFuso = (horaFranca - 24).toFixed(2)
        saidaHoraNoFuso.textContent = `Na França são ${horaFrancaFuso}`
    } else {
        saidaHoraNoFuso.textContent = `Na França são ${horaFranca}`
    }
}

btnFuso.addEventListener('click', calcularFusoHorario)