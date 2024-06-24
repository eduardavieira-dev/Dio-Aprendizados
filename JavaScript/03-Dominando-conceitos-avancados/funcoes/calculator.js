//CALLBACK
function adicao(x, y) {
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function calcular(x, operacao, y) {
    console.log(operacao(x, y))
}

calcular(10, adicao, 20)
calcular(10, multiplicacao, 20)

//os callbacks são muito usados na web

document.getElementById('btn1').addEventListener('click', () => {
    console.log('clicou!')
})
