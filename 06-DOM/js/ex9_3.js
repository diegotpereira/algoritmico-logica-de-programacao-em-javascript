let btnAdicionar = document.getElementById('btAdicionar')
let ckTodos = document.getElementById("ckTodos")
let btnExcluir = document.getElementById('btExcluir')

// Função para adicionar filme
function adicionarFilme() {
    let inTitulo = document.getElementById('inTitulo')
    let inGenero = document.getElementById('inGenero')
    let titulo = inTitulo.value
    let genero = inGenero.value

    if (titulo == '' || genero == '') {
        alert('Por favor, preencha os campos!')
        inTitulo.focus()

        return
    }


    let btFilmes = document.getElementById('tbFilmes')

    inserirLinha(tbFilmes, titulo, genero)

    gravarFilme(titulo, genero)

    inTitulo.value = ''
    inGenero.value = ''
    inTitulo.focus()

}
btnAdicionar.addEventListener('click', adicionarFilme)

function inserirLinha(tabela, titulo, genero) {
    let linha = tabela.insertRow(-1)
    let col1 = linha.insertCell(0)
    let col2 = linha.insertCell(1)
    let col3 = linha.insertCell(2)

    col1.textContent = titulo
    col2.textContent = genero
    col3.innerHTML = "<input type='checkbox'>"
}

function gravarFilme(titulo, genero) {
    if (localStorage.getItem('filmesTitulo')) {
        let filmesTitulo = localStorage.getItem('filmesTitulo') + ";" + titulo
        let filmesGenero = localStorage.getItem('filmesGenero') + ";" + genero

        localStorage.setItem('filmesTitulo', filmesTitulo)
        localStorage.setItem('filmesGenero', filmesGenero)
    } else {
        localStorage.setItem('filmesTitulo', titulo)
        localStorage.setItem('filmesGenero', genero)
    }
}

// Função de listar Filmes
function recuperarFilme() {
    if (localStorage.getItem('filmesTitulo')) {
        let titulos = localStorage.getItem('filmesTitulo').split(";")
        let generos = localStorage.getItem('filmesGenero').split(";")
        let tbFilmes = document.getElementById('tbFilmes')

        for (let index = 0; index < titulos.length; index++) {
            inserirLinha(tbFilmes, titulos[index], generos[index])
        }

    }
}
recuperarFilme()

// Função checkbox
ckTodos.addEventListener('change', function() {
    let tbFilmes = document.getElementById('tbFilmes')
    let ckExcluir = tbFilmes.getElementsByTagName('input')
    let status = ckTodos.checked

    for (let index = 1; index < ckExcluir.length; index++) {
        ckExcluir[index].checked = status
    }
})

// Função rremover filmes localStorage
function removerFilmes() {
    let tbFilmes = document.getElementById('tbFilmes')
    let ckExcluir = tbFilmes.getElementsByTagName('input')
    let itemSelecionado = false

    for (let index = 1; index < ckExcluir.length; index++) {
        if (ckExcluir[index].checked) {
            itemSelecionado = true

            break
        }
    }

    if (!itemSelecionado) {
        alert('Por favor, selecione um filme para exclusão!')

        return
    }

    if (confirm('Você tem certeza que deseja excluir?')) {
        localStorage.removeItem('filmesTitulo')
        localStorage.removeItem('filmesGenero')

        for (index = 1; index < ckExcluir; index++) {
            if (!ckExcluir[index].checked) {
                let titulo = tbFilmes.rows[index].cells[0].textContent
                let genero = tbFilmes.rows[index].cells[1].textContent

                gravarFilme(titulo, genero)
            }
        }
        for (index = ckExcluir.length - 1; index > 0; index--) {
            if (ckExcluir[index].checked) {
                tbFilmes.deleteRow(index)
            }
        }
        ckExcluir[0].checked = false
    }
}

btnExcluir.addEventListener('click', removerFilmes)