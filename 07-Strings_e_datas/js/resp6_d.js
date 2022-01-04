let btnCalcular = document.getElementById('btCalcular')


function calcularDataValor() {
    let inData = document.getElementById('inData')
    let inValor = document.getElementById('inValor')
    let saidaDataLimite = document.getElementById('saidaDataLimite')
    let saidaDesconto = document.getElementById('saidaDesconto')
    let data = inData.value
    let valor = Number(inValor.value)

    if (data == '' || valor == '' || isNaN(valor)) {
        alert('Por favor, informe os dados corretamente.')
        inData.focus()

        return
    }
    let vencto = new Date()
    let partes = data.split('-')
    vencto.setDate(Number(partes[2]))
    let mes = vencto.setMonth(Number(partes[1]) + 3)

    if (mes < 8) {
        vencto.setFullYear(Number(partes[0]))
    } else {
        vencto.setFullYear(Number(partes[0]) + 1)
    }

    let desconto = valor - (0.2 * valor)

    saidaDataLimite.textContent = `Data limite para pagto com desconto: ${vencto.getDate()}/ ${vencto.getMonth()}/ ${vencto.getFullYear()}`
    saidaDesconto.textContent = `Valor com desconto R$: ${desconto.toFixed(2)}`
}
btnCalcular.addEventListener('click', calcularDataValor)