class Pessoa{
    nome;
    idade;
    anoDeNasimento;

    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade;
        this.anoDeNasimento = 2024-idade;
    }


    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
};

function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
}else if(p2.idade > p1.idade){
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
}else{
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
}
}

const eduarda = new Pessoa('Eduarda', 18);
const Jolie = new Pessoa('Jolie Lispector', 21);

compararPessoa(eduarda, Jolie);