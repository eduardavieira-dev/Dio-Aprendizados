/* BOLEANO
const num = true;
const num = false;
*/

/*Nas condicionais são usadas:
        maior >
        menor <
        igual === (mais usado)
        atribuição =
        igualdade == (ignora o tipo da variavel, ou seja, funciona com string texto e variavel) raramente usado

*/
    /*TESTE DE PAR OU IMPAR */
 /*   
    const numero = 10;

    const numeroPar = (numero % 2) === 0;
    
    /*Se o resto da operação for igual a zero então o número é par */
/*
    if(numeroPar) {
        console.log('Par');
    } else {
        console.log('Impar');
    }
*/
    /*
    if(!numeroPar){
        console.log('Impar');
    }
    A exclamação ! serve para se a variavel for diferente ser imprimida a mensagem no terminal


    Mostrar se é true ou false
    console.log(numeroPar);
    */

    /*O número é divisivel por 5? */

    const numero = 10;

    const divisivel = (numero % 5) === 0;

    if(numero === 0){
        console.log('O número é inválido')
    }
    else if(divisivel) {
        console.log('Sim');
    } else {
        console.log('Não');
    }

    /*
    Outra opção mais simples de resolução dos pares:
    
    
     if((numero % 2) === 0) {
        console.log('Par');
    } else {
        console.log('Impar');
    }
    
    */

