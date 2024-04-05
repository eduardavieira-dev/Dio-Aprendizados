const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(8);
notas.push(8);

//Somando manualmente
//const soma = notas[0]+notas[1]+notas[2]+notas[3]+notas[4];

//console.log(soma/notas.length);
//length é para saber o tamanho da lista

//ESTRUTURA DE REPETIÇÃO
/*

const nome = 'Eduarda Vieira Gonçalves'; 
//A string é um array de caracter fácil de percorrer

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);

}
*/

//Média das notas
 
let soma = 0;
//É  necessário usar let pois a cada interação vai estar modificando ela

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = (soma/notas.length);
console.log(media);