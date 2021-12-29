const inputValorDoSaque = document.getElementById('inputValorDoSaque')
const btnSaque = document.getElementById('btnSaque')
const saidaNotasDe100 = document.getElementById('saidaNotasDe100')
const saidaNotasDe50 = document.getElementById('saidaNotasDe50')
const saidaNotasDe10 = document.getElementById('saidaNotasDe10')

// console.log(saidaNotasDe100);
// console.log(saidaNotasDe50);
// console.log(saidaNotasDe10);

// console.log(btnSaque);
function calcularSaque() {
    let valorDoSaque = Number(inputValorDoSaque.value)

    // calcula a quantidade de cada nota
    let numeroDeNotas100 = Math.floor(valorDoSaque / 100)
    let restanteDe100 = valorDoSaque % 100

    let numeroDeNotas50 = Math.floor(restanteDe100 / 50)
    let restanteDe50 = restanteDe100 % 50

    let numeroDeNotas10 = Math.floor(restanteDe50 / 10)

    if ((inputValorDoSaque.value == 0 || inputValorDoSaque == '') ||
        isNaN(valorDoSaque)) {
        // valida o valor input
        alert('Digite o valor de saque!')
        inputValorDoSaque.focus()

        return;
        // verifica se é multiplo de 10
    } else if (valorDoSaque % 10 !== 0) {
        alert('Esse caixa só possuem notas de R$10, R$50, e R$100!')
        inputValorDoSaque.value = ''
        inputValorDoSaque.focus()

        return
        // retorna a quantidade de notas
    } else {
        saidaNotasDe100.textContent = `Notas de R$100: ${numeroDeNotas100}`
        saidaNotasDe50.textContent = `Notas de R$50: ${numeroDeNotas50}`
        saidaNotasDe10.textContent = `Notas de R$10: ${numeroDeNotas10}`
    }
}

btnSaque.addEventListener('click', calcularSaque)