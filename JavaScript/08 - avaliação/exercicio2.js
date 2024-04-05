
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.
//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

const n = gets();//trás os números exportados do outro arquivo
let maiorNumPar = null;//quando não temos um valor escrevemos null, ele não existe
let menorNumImpar = null;

for (let i = 0; i < n; i++) {
    const num = gets();
    if (num % 2 === 0) {
        if (maiorNumPar === null || num > maiorNumPar) {
            maiorNumPar = num;
        }
      } else {
        if(menorNumImpar === null || num < menorNumImpar){//Nunca tinha avaliado nenhum numero
            menorNumImpar = num;
        }
      }    
}

print(maiorNumPar);
print(menorNumImpar);