
const lista = [1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
//reduzir a lista a um unico valor

const someDeTodosOsNumeros = lista.reduce((previous, current) => {
    console.log(previous, current)//ver os valores que estão sendo passados e somados até chegar no 55
    return previous + current
})//caso não tenha nada na lista voce pode passar o valor inicial }, 0)

console.log(someDeTodosOsNumeros)
