function calcularImc(peso, altura){
    return peso/ Math.pow(altura, 2);
}

function classificarImc(imc){
    if(imc< 18.5){
        return('Você está abaixo do peso');
    }else if(imc>=18.5 && imc<= 25){
        return('Você está no seu peso ideal');
    }else if(imc>25 && imc<=30){
        return('Você está acima do peso');
    }else if(imc>30 && imc<=40){
        return('Você está obeso');
    }else{
        return('Você está com obesidade grave');
    }

}

function main(){
    const peso = 58;
    const altura = 1.6;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();
//As funções também são valores que podem ser manipulados

/*
    FUNÇÃO IMEDIATAMENTE INVOCADA. Ela se executa sem precisar do main
    (function(){
    const peso = 58;
    const altura = 1.6;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
    })();
}

Essa função só existe dentro do () e não consegue chama-la fora. Só é executada uma vez e é isolada. Muito utilizada em programação web.

*/

