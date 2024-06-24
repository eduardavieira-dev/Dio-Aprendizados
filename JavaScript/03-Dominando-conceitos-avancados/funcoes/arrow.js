function funcao1(){
    console.log(this)
}//se precisar usar o contexto se usa essa

const funcao2 = () => {
    console.log(this)
}//se usa mais essa por simplificidade

const renan = {
    nome: 'Renan',
    funcao1,
    funcao2
}

renan.funcao1()
renan.funcao2()
