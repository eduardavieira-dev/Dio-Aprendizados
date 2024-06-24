
const pessoa = {
    nome: 'João',
    idade: 4
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Oláaaaa'])
gritar.call(pessoa, 'Oiii')