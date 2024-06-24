/* 
Boolean
null
undefined
Number
String
Symbol 
*/

//object é um coleção dinamica de chave{} e valor


const obj = {
    nome : "Duda",
    idade: 18,
    falar: function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

obj.sobrenome = 'Vieira';
obj['nome']='Eduarda';

const s = obj.falar

obj.falar()
s()

console.log(obj);
console.log(obj.nome);
console.log(obj['nome']);




// tipo primitivo e imutavel-> true, false
// objeto -> new Boolean(true)


//Use o decimal js quando fizer contas de decimais


const x = null; //ausencia de valor
let y;//ausencia de declaração
console.log(x);
console.log(y);

const id = 20;
console.log('<div id="'+ id +'">\n\tteste\n<div>');
console.log(`
    <div id="${id}">
        teste
    <div>`);//template string





// o Symbol é unico e imutavel e é util para criar identificadores de objetos
const m = Symbol('10');
const n = Symbol('10');
console.log(x === y);


if(true){
    var pass='sim';
}
console.log(pass);

const total = '10'-15+5;
console.log(total);

let p = 10;
p = 'Que texto bonito';

console.log(p);
/*
if(10=='10'){
    console.log('faz a cconversão pra tentar comparar->despreza o tipo')
}
if(10==='10'){
}else{
    console.log('considera o tipo, tem que ser string e string ou num e num')
}

console.log(10!='10')
console.log(10!=='10')  
*/