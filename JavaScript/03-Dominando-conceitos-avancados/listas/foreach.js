

const lista = [1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]


//i= interação listaRef= referencia pra lista
// const callBack= (value, i, listaRef) => {
//     console.log(value + i)
// }

// lista.forEach((value, i, listaRef)=>{
//     console.log(value, i, listaRef)
// })



// lista.forEach(callBack)

//É uma sintaxe reduzida para percorrer a lista que é o mesmo que acontece abaixo, porém ele é mais lento também


// for (let i=0; i<lista.length; i++){
//     const element = array[i];
//     callBack(element, i, lista)
// }//Vai ter a mesma sitaxe e o mesmo acontecimento


/* //Mais usado
lista.forEach((value)=>{ console.log(value)})
ou
*/

lista.forEach(value => console.log(value));
