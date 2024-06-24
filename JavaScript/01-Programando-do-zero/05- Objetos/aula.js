//OBJETOS
const pessoa = {
     nome: 'Eduarda Vieira',
     idade: 18,

     descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
     }//É usado acento grave ``, diferente de outros que usam apenas as ''aspas simples
};
//Objeto é uma coleção dinamica de chave e valor(Podem ser adicionados ou removidos).Objetos agrupam valores, são coleções de dados

//Uma função dentro de um objeto é chamado de método

//eduarda.altura= 1.60;
//objetos podem ser incrementados

//delete eduarda.idade;

//console.log(eduarda.nome);
//console.log(eduarda.idade);
//console.log(eduarda);

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
};
pessoa.nome = 'Sophie';
//Essas novas atribuições sobressaem as antigas, ou seja, o ultimo valor dado ao objeto é o que aparece

pessoa.descrever();


const atributo = 'idade';
console.log(pessoa['atributo']);
//Através de uma string você está acessando dinamicamente o atributo o que premite que você faça as coisas dinamicas no código