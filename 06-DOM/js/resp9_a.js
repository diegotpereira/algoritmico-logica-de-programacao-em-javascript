let btnExibir = document.getElementById('btExibir')
let btnNovas = document.getElementById('btNovas')
    // Função exibir velas
function exibirVelas() {
    let inIdade = document.getElementById('inIdade')
    let idade = Number(inIdade.value)

    if (idade <= 0 || idade > 120 || isNaN(idade)) {
        alert('Por favor, informe uma idade válida...entre 1 e 120 anos')
        inIdade.focus()

        return
    }
    let strIdade = idade.toString()
    let divExibir = document.getElementById('divExibir')
    let img

    for (let index = 0; index < strIdade.length; index++) {
        img = document.createElement('img')
        img.src = "img/" + strIdade.charAt(index) + ".jpg"
        img.alt = "Vela de " + strIdade.charAt(index) + " anos"
        divExibir.appendChild(img)
    }
    btnExibir.disabled = true
    btnNovas.focus()
}
btnExibir.addEventListener('click', exibirVelas)

btnNovas.addEventListener('click', function() {
    location.reload()
})