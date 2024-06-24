
const pessoa = {
    genero: 'masculino'
    // por usar o objeto nn é mais necessário usar o __proto__
}

//todo objeto tem seu prototype

const duda = Object.create(pessoa)

duda.nome = 'duda';

console.log(duda.genero)