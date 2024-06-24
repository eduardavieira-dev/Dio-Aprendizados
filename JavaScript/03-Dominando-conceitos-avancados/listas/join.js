
const lista = [{name: 'Joana'}, {name: 'Sabrina'}, {name: 'Sol'}]
//join é juntar com um seprador e tornar a lista em uma string

/*
console.log(
    lista.map(e=> e.name)
        .filter((e)=> e.startsWith('S'))
        .join('/')
)
*/

const elementoEmHtml = lista
    .filter((e)=> e.name.startsWith('S'))
    .map(e=> `<li>${e.name}</li>` )
    .join('/')

console.log(elementoEmHtml)