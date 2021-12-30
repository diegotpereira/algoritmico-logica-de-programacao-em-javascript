let valorTotal = Number(prompt('Informe o valor total da conta: '))
let clientes = Number(prompt('Informe quantos clientes vão pagar a conta: '))
let valorCliente = valorTotal / clientes

alert(`O valor a ser pago por cada um dos ${clientes} clientes será de R$ ${valorCliente.toFixed(2)}.`)