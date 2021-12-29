const inputNoticia = document.getElementById('inputNoticia')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListarNoticia = document.getElementById('btnListarNoticia')
const saidaNumeroDeNoticias = document.getElementById('saidaNumeroDeNoticias')
const saidaNoticias = document.getElementById('saidaNoticias')

let noticias = []

function adicionarNoticia() {
    let noticiaCadastrada = inputNoticia.value

    if (noticiaCadastrada == '') {
        alert('Por favor, adicione alguma noticia!')
        inputNoticia.focus()

        return
    }

    noticias.push(noticiaCadastrada)
    let lista = ''

    for (let index = 0; index < noticias.length; index++) {
        lista = `Número de notícias cadastrada(s): ${index + 1}`
    }

    inputNoticia.value = ''
    inputNoticia.focus()

    saidaNumeroDeNoticias.textContent = lista
}

btnAdicionar.addEventListener('click', adicionarNoticia)

function listarNoticias() {
    let exibirNoticias = Number(prompt('Quantas noticias você gostaria de ver?'))
    let totalDeNoticias = noticias.length

    if ((exibirNoticias == 0) || isNaN(exibirNoticias) || exibirNoticias > totalDeNoticias) {
        alert('Escolha um número menor ou igual ao de notícias cadastradas!')

        return
    }
    let ultimasNoticias = `${exibirNoticias} última(s) notícia(s)\n-------------------------\n`

    for (let i = totalDeNoticias - 1; i >= totalDeNoticias - exibirNoticias; i--) {
        ultimasNoticias += `${i + 1}° ${noticias[i]}\n`
    }

    saidaNoticias.textContent = ultimasNoticias
}

btnListarNoticia.addEventListener('click', listarNoticias)