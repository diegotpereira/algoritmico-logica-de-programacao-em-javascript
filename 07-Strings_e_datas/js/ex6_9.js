const TAXA_MULTA = 2 / 100
const TAXA_JUROS = 0.33 / 100

let btnCalcular = document.getElementById('btCalcular')
let btnContaNova = document.getElementById('btNovaConta')

function calcularMultaJuros() {
    let inDataVenc = document.getElementById('inDataVenc')
    let inValor = document.getElementById('inValor')
    let saidaMulta = document.getElementById('saidaMulta')
    let saidaJuros = document.getElementById('saidaJuros')
    let saidaTotal = document.getElementById('saidaTotal')
    let dataVenc = inDataVenc.value
    let valor = Number(inValor.value)

    if (dataVenc == '' || valor == '' || isNaN(valor)) {
        alert('Insira os dados corretamente.')
        inDataVenc.focus()

        return
    }

    let hoje = new Date()
    let vencto = new Date()
    let partes = dataVenc.split('-')
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    let atraso = hoje - vencto
    let multa = 0
    let juros = 0

    if (atraso > 0) {
        let dias = Math.round(atraso / 86400000)
        multa = valor * TAXA_MULTA
        juros = (valor * TAXA_JUROS) * dias
    }

    let total = valor + multa + juros

    saidaMulta.value = multa.toFixed(2)
    saidaJuros.value = juros.toFixed(2)
    saidaTotal.value = total.toFixed(2)
}
btnCalcular.addEventListener('click', calcularMultaJuros)


function limparCampos() {
    location.reload()
}
btnContaNova.addEventListener('click', limparCampos)