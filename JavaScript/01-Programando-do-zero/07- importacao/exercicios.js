const { gets, print}= require('./exercicio_export');

//Exemplo de resolução super simplificado

/*
let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i ++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
  }

print(maiorValorEncontrado);
*/

const numSorteados = [];

for (let i = 0; i < 5; i++) {
    const sorteado = gets();//Toda vez que executar é chamado o gets, que é a entrada do valor
    numSorteados.push(sorteado);//O push vai empurrar aqueles valores que você exportou do outro arquivo para o array de numSorteados
}

let maiorValor = 0;

for (let i = 0; i < numSorteados.length; i++) {
    const sorteado = numSorteados[i];
    if (sorteado > maiorValor) {
        maiorValor = sorteado;   
    }//será feita uma comparação para achar o maior valor
}

print(maiorValor);


/*
Uma sala contem 5 alunos e para cada aluno foi sorteado un número de 1 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
Dados de entrada:
5
50
10
98
23
Saida:
98
*/

