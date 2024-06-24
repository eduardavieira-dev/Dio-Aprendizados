/*
- Classe: É uma estrutura que define um tipo de objeto, incluindo seus métodos e propriedades. No entanto, JavaScript usa protótipos em vez de classes tradicionais, até a introdução de classes no ECMAScript 6 (ES6).

- Objeto: É uma instância de uma classe. É uma estrutura de dados que contém propriedades e métodos.

- Instância: Refere-se a um objeto específico criado a partir de uma classe.

- Método: É uma função associada a um objeto ou a uma classe. Métodos definem comportamentos dos objetos.

- Atributo: É uma característica de um objeto, que pode conter um valor específico.

- Função: É um bloco de código nomeado e reutilizável, que pode ser chamado em diferentes partes de um programa para executar uma ação específica. Em JavaScript, as funções são objetos de primeira classe, o que significa que podem ser passadas como argumentos para outras funções, retornadas por outras funções e atribuídas a variáveis.
*/


class Pessoa{
    nome;
    idade;
    anoDeNasimento;
//sempre que uma pessoa é instanciada ela passa pelo constructor. O constructor recebe parametros
    constructor(nome, idade){
        //sempre que uma pessoa for instanciada ele vai pedir o nome e a idade
        this.nome = nome,
        this.idade = idade;
        this.anoDeNasimento = 2024-idade;
    }


    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
};
//sempre que usa o new na instanciação ela vai chamar o método constructor 
const eduarda = new Pessoa('Eduarda', 18);
const Jolie = new Pessoa('Jolie Lispector', 21);


eduarda.descrever();
Jolie.descrever();

console.log(eduarda);
//Esse é um comecinho de programação orientada a objeto