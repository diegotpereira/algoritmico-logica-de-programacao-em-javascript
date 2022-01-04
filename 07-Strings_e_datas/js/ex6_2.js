let btnMontar = document.getElementById('btMontar')

function montarDica() {
    let inFruta = document.getElementById('inFruta')
    let saidaDica = document.getElementById('saidaDica')
    let fruta = inFruta.value.toUpperCase()

    if (fruta == '') {
        alert('Por favor, informe um nome de fruta')
        inFruta.focus()

        return
    }
    let resposta = fruta.charAt(0)
    let estrelas = ''
    let tam = fruta.length

    for (let index = 1; index < tam; index++) {
        if (fruta.charAt(index) == fruta.charAt(0)) {
            resposta += fruta.charAt(0)
        } else {
            resposta += '_'
        }
        estrelas += '*'
    }
    saidaDica.textContent = resposta
    inFruta.value = estrelas
}
btnMontar.addEventListener('click', montarDica)