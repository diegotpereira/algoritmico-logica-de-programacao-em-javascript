let rbBrasil = document.getElementById('rbBrasil')
let rbPelotas = document.getElementById('rbPelotas')
let rbFarroupilha = document.getElementById('rbFarroupilha')

// Função trocar clube
function trocarClube() {
    let imgClube = document.getElementById('imgClube')
    let divTitulo = document.getElementById('divTitulo')
    let clube

    if (rbBrasil.checked) {
        clube = 'Brasil'

    } else if (rbPelotas.checked) {
        clube = 'Pelotas'

    } else {
        clube = 'Farroupilha'
    }
    divTitulo.className = 'row cores' + clube

    imgClube.src = "img/" + clube.toLowerCase() + " .png"
    imgClube.className = "exibe"
    imgClube.alt = "Símbolo do " + clube

    localStorage.setItem('clube', clube)
}
rbBrasil.addEventListener('change', trocarClube)
rbPelotas.addEventListener('change', trocarClube)
rbFarroupilha.addEventListener('change', trocarClube)

function verificarClube() {
    if (localStorage.getItem('clube')) {
        let clube = localStorage.getItem('clube')

        if (clube == 'Brasil') {
            rbBrasil.checked = true
        } else if (clube == 'Pelotas') {
            rbPelotas.checked = true
        } else {
            rbFarroupilha.checked = true
        }
        trocarClube()
    }
}

verificarClube()