let noticias = []
let cadastradas = 0
let btnAdicionar = document.getElementById('btAdicionar')
let btnListar = document.getElementById('btListar')

function adicionarNoticia() {
    let inNoticia = document.getElementById('inNoticia')
    let noticia = inNoticia.value

    if (noticia == '') {
        alert('Por favor, insira uma noticia!')
        inNoticia.focus()

        return
    }

    noticias.push(noticia)
    console.log(noticia);

    inNoticia.value = ''
    inNoticia.focus()

    cadastradas = 0

    for (let index = 0; index < noticias.length; index++) {
        cadastradas += 1
    }
    document.getElementById('saidaTotalNoticias').textContent = `Notícias cadastradas: ${cadastradas}`
}
btnAdicionar.addEventListener('click', adicionarNoticia)


function listarNoticias() {
    let numeroNoticias = Number(prompt('Insira a quantidade de notícias que deseja visualizar: '))

    if (numeroNoticias > cadastradas) {
        alert('Informe um númro menor ou igul ao número de notícias cadastradas.')

        return
    }
    let ultimasNoticias = document.getElementById('saidaUltimasNoticias')
    let listaNoticias = ''
    let notCadastradas = 0
    let copia = noticias.slice()
    copia.reverse()
    notCadastradas = copia.length

    for (let index = 0; index < numeroNoticias; index++) {
        listaNoticias += `${notCadastradas} ${copia[index]}\n`
        notCadastradas -= 1
    }
    ultimasNoticias.textContent = `${numeroNoticias} Últimas Notícias \n--------------\n${listaNoticias}`
}
btnListar.addEventListener('click', listarNoticias)