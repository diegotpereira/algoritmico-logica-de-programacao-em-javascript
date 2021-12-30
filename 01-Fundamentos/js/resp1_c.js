let preco = Number(prompt('Informe o preço do produto: R$'))
let aVista = preco - 0.1 * preco
let aPrazo = preco / 3

alert(`Preço: R$ ${preco}
       À vista: R$ ${aVista.toFixed(2).replace(".", ",")}
       Ou 3x de R$ ${aPrazo.toFixed(2).replace(".", ",")}.`)
console.log(aVista);