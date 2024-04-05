//Faça um programa para calcular o valor de uma viagem.

//Você terá 3 variaveis. Sendo elas:
//1- Preço do etanol
//2- Preço da gasolina
//3- Tipo de combustivel que está no seu carro
//4- Gasto médio de combustível do carro por KM
//5- Distancia em km da viagem

const etanol = 3.42;
const gasolina = 5.58;

const kmPorLitro = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * etanol;
    console.log(valorGasto.toFixed(2));
//O to.fixed(2) faz com que apareça apenas 2 numeros apos o . Ex 23.00
} else {
    const valorGasto = litrosConsumidos * gasolina;
    console.log(valorGasto.toFixed(2));
}

