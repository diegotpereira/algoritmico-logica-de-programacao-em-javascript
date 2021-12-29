const inputDescricao = document.getElementById('inputDescricao');
const inputValorAPagar = document.getElementById('inputValorAPagar');
const btnPagar = document.getElementById('btnPagar');
const saidaContas = document.getElementById('saidaContas');
const saidaTotal = document.getElementById('saidaTotal');

// Variáveis globais que contam e somam respectivamente 
// os valores do inputs
let numeroDeContas = 0
let valorTotal = 0

// Variável que acumula linha
let quantidade = ''

function registrarContas() {
    let descricao = inputDescricao.value
    let valorAPagar = Number(inputValorAPagar.value)

    // Condicional que checa se há algum erro
    // nos inputs
    if (descricao == '' || valorAPagar == 0 || isNaN(valorAPagar)) {
        alert('Por favor, digite os dados corretamente!')
        inputDescricao.value = ''
        inputValorAPagar.value = ''
        inputDescricao.focus()

        return
    }

    // adiciona os valores dos inputs na variáveis globais
    numeroDeContas++
    valorTotal += valorAPagar

    // adiciona nas linhas o valor da conta
    quantidade += `${descricao} - R$: ${(valorAPagar).toFixed(2)}\n`

    // altera o conteúdo nos inputs
    saidaContas.textContent = `${quantidade}-----------------------`
    saidaTotal.textContent = `${numeroDeContas} Conta(s) - Total R$: ${(valorTotal).toFixed(2)}`

    // Limpa os input 
    inputDescricao.value = ''
    inputValorAPagar.value = ''
    inputDescricao.focus()
}
btnPagar.addEventListener('click', registrarContas)