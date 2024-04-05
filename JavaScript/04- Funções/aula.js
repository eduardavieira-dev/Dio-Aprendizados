

function sayMyName(name){
    console.log('Your name is '+ name);
    //Não tem retorno, é como um procedimento
}
sayMyName('July');
sayMyName('Sophie');



function quadrado(valor){
   return valor*valor;
    //Vai retornar um valor
}
   const quadradoDeDez= quadrado(10);
    console.log(quadradoDeDez);
    //Você pode chamar a função varias vezes




function incremenetarJuros(valor, percentualDeJuros){
    //Você consegue usar mais de uma parametro apenas separando por virgula
    const valorDeAcrecimo = (percentualDeJuros/100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incremenetarJuros(100, 10));
console.log(incremenetarJuros(100, 15));
console.log(incremenetarJuros(100, 20));



