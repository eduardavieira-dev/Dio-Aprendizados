//O map transforma os elementos de uma lista
class Pessoa {
        constructor(name){
            this.name= name
        }
}

const lista =[new Pessoa('Holy'), new Pessoa('Sabrina'), new Pessoa('Audrey')]
/*
const lisNomes = []
for(let i = 0; i < lista.length; i++){
    const element = lista[i];
    lisNomes.push(element.name)
}*/

const lisNomes = lista.map((element, i)=>{
    return  `${i} - ${element.name}` 
})

// const lisNomes = lista.map((element)=> element.name)//mais simplificado

console.log(lisNomes)


const listaEmHtml = lista.map((element) => {
    return `
    <li>
         ${element.name}
    </li>
    `
})

console.log(listaEmHtml)