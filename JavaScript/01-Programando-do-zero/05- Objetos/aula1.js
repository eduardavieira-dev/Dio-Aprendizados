//CLASSES

/*

- Classe: É uma estrutura que define um tipo de objeto, incluindo seus métodos e propriedades. No entanto, JavaScript usa protótipos em vez de classes tradicionais, até a introdução de classes no ECMAScript 6 (ES6).

- Objeto: É uma instância de uma classe. É uma estrutura de dados que contém propriedades e métodos.

- Instância: Refere-se a um objeto específico criado a partir de uma classe.

- Método: É uma função associada a um objeto ou a uma classe. Métodos definem comportamentos dos objetos.

- Atributo: É uma característica de um objeto, que pode conter um valor específico.

- Função: É um bloco de código nomeado e reutilizável, que pode ser chamado em diferentes partes de um programa para executar uma ação específica. Em JavaScript, as funções são objetos de primeira classe, o que significa que podem ser passadas como argumentos para outras funções, retornadas por outras funções e atribuídas a variáveis.
*/


//Definir como são pessoas para que sejam instanciadas
//instancia é uma ocorrencia de uma pessoa
//Classe é um carro
//Instancia do carro é o carro branco de 2017
class Pessoa{
    nome;
    idade;

    //Na classe não é necessário escrever o function para definir o método
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }//esse código também não é repetido e são criadas instancias que vão seguir este modelo
};

//como instanciar?
const eduarda = new Pessoa();
    eduarda.nome = 'Eduarda Vieira';
    eduarda.idade = 18;

const Jolie = new Pessoa();
    Jolie.nome = 'Jolie Lispector Gonçalves';
    Jolie.idade = 21;



eduarda.descrever();
Jolie.descrever();

/*Classe é DEFINIÇÃO e instancia é a OCORRENCIA

const eduarda = {
    nome: 'Eduarda Vieira',
    idade: 18,

    descrever: function () {
       console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
 */
//Não é uma boa prática repertir código, por isso são usadas as classes