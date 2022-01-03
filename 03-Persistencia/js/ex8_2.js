let rbBrasil = document.getElementById('rbBrasil')
let rbPelotas = document.getElementById('rbPelotas')
let rbFarroupilha = document.getElementById('rbFarroupilha')
let clube
let inputsRadio


function trocarClube() {
    let imgClube = document.getElementById('imgClube')
    let divTitulo = document.getElementById('divTitulo')
    let clubes = ['Brasil', 'Pelotas', 'Farroupilha']

    for (let index = 0; index < 4; index++) {
        if (inputsRadio[index].checked) {
            let selecao = index;
            break
        }
    }

    if (selecao <= 2) {
        divTitulo.className = 'row cores' + clubes[selecao]
        imgClube.src = "img/" + clubes[selecao].toLowerCase() + " .png"
        imgClube.className = 'exibe'
        imgClube.alt = 'Símbolo do ' + clubes[selecao]
        localStorage.setItem('clube', clubes[selecao])
    } else {
        divTitulo.className = 'row'
        imgClube.className = 'oculta'
        imgClube.alt = ''
        localStorage.removeItem('clube')
    }
}

function verificarClube() {
    if (localStorage.getItem('clube')) {
        if (clube == 'Brasil') {
            inputsRadio[0].checked = true
        } else if (clube == 'Pelotas') {
            inputsRadio[1].checked = true
        } else {
            inputsRadio[2].checked = true
        }
        trocarClube()
    }
}

verificarClube()