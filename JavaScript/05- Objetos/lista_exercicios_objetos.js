/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilometro rodado. Crie um método que dado a quantidade de quilómetros e o preço do combustível nos de o valor
gasto en reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    //construtor faz ser obrigatório informar os atributos pedidos. É sempre usado o this
    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    //Você já pode chamar a função lá no console.log
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm*this.gastoMedioPorKm*precoCombustivel;
    }


}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Prata', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));


