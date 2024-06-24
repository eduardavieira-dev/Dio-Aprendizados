//no foreach vc só percorre a lista
// no filter vc cria uma nova lista e ele devolve essa nova lista

const lista = [1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]

listaNumPar = lista.filter((element)=>{
    return (element % 2 === 0)
})//ele recebe um boolean

console.log(listaNumPar);

