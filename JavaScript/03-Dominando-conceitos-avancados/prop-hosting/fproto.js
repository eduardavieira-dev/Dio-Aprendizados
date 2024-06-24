function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`)
}

//const eduarda = new Pessoa('Eduarda', 18)
//eduarda.falar();

const eduarda = {
    genero: 'feminino' 
}

Pessoa.call(eduarda, 'nome', 18)

console.log(eduarda)



const renan = {
    nome: 'Renan'
}

renan.__proto__ = {
    idade: 30
}

console.log(renan.idade)

// ---

function Pessoa(nome) {
    this.nome = nome
}

Pessoa.prototype.falarSeuNome = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const renan = new Pessoa('renan')
renan.falarSeuNome()


const pessoa = {
    idade: 18
}

const renan = {
    nome: 'Renan',
    idade: 30,
    __proto__: pessoa
    // sobreescreve a idade contida no objeto utilizado como prototipo
}

console.log(renan.idade)