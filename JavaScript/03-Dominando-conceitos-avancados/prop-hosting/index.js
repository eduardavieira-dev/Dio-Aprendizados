/* Orientação a prototipo */

const pessoa ={
    genero: 'feminino'
}

const eduarda ={
    nome: 'eduarda',
    idade: 18,
    __proto__: pessoa
}

console.log(eduarda.genero);

// função construtora e prototipo sempre começa com a letra mauiscula

function Person(nome, idade){
    this.nome = nome
    this.idade = idade
    }
    
    Person.prototype.falar = function(){
        console.log(`Meu nome é: ${this.nome}`)
        }
        
        const duda = new Person('Eduarda', 18)
        
        duda.falar();
        
        //é a mesma coisa no modelo de class abaixo
        
/*     class Person{
        constructor(nome, idade){
            this.nome = nome
            this.idade = idade
            }
          falar(){
            console.log(`Meu nome é: ${this.nome}`)
            }
        } */
