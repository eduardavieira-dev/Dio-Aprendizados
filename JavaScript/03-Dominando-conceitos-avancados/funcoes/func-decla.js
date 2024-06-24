
// Fisrt Class Functions
// Higher Order Functions

function falarMeuNome() {
    console.log('Meu nome é Eduarda')
    
}

// const referenciaNova = falarMeuNome
// referenciaNova()

function falarNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Vieira Gonçalves')
    return falarMeuNome
}

falarNomeCompleto(falarMeuNome)()



//-----------

// Function Expression
// Frunction Declaration


function nomeDaFuncao() {
    console.log('nomeDaFuncao')
}//uma unidade só e sofre o hosting

const nomeDaOutraFuncao = function () {
    console.log('nomeDaOutraFuncao')  
}//sofre  o hosting mas a atribuição fica pra baixo

nomeDaFuncao()
nomeDaOutraFuncao()