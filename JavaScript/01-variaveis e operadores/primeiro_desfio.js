/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variaveis. Sendo elas:
    1- Preço do combustível
    2- Gasto médio de combustível do carro por KM
    3- Distancia em KM da viagem

    Imprima no console o valor que será gasto de combustível para realizar essa viagem.

 */   

    const precoCombustivel = 5.58;
    const kmPorLitro = 12;
    const distanciaKm = 1270;

    const litrosConsumidos = distanciaKm / kmPorLitro;
    const valorGasto = litrosConsumidos * precoCombustivel;

    console.log(valorGasto.toFixed(2));
    /*O .toFixed(2) vai fazer um arredondamento no código quando na divisão ficar um número muito grande após a virgula */
