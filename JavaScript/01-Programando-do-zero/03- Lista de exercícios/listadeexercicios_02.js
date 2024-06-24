/*
    2) O IMC Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
    Formula do IMC:
    IMC peso/ (altura altura)
    Elabore um algoritmo que dado o peso e a altura de un adulto mostre sua condição de acordo com a tabela abaixo.
    IMC en adultos Condição:
    Abaixo de 18.5 Abaixo do peso;
    Entre 18.5 e 25 Peso normal;
    Entre 25 e 30 Acima do peso;
    Entre 30 e 40 Obeso;
    Acima de 40 Obsesidade Grave;
*/
const altura = 1.6;
    const peso = 58;

    const imc = peso/(altura*altura);
    //Math.pow(altura,2); Outra forma de fazer a variavel ser elevada a um valor utilizando uma biblioteca Math
    
    if(imc< 18.5){
        console.log('Você está abaixo do peso');
    }else if(imc>=18.5 && imc<= 25){
        console.log('Você está no seu peso ideal');
    }else if(imc>25 && imc<=30){
        console.log('Você está acima do peso');
    }else if(imc>30 && imc<=40){
        console.log('Você está obeso');
    }else{
        console.log('Você está com obesidade grave');
    }


   // imc < 18.5 ? console.log('vfdd'): console.log('hdshs'); Tito me ensinou essa forma de fazer uma condicional

   //Outra solução da atividade, o chat fez mas não entendi boa parte do que foi feito
   /*


   // Importando o módulo readline do Node.js para receber entrada do usuário
        const readline = require('readline');

        // Configurando interface para entrada e saída
        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

        // Função para calcular o IMC
        function calcularIMC(peso, altura) {
        // Convertendo altura de metros para centímetros
        altura = altura / 100;
        // Calculando IMC
        const imc = peso / (altura * altura);
        return imc.toFixed(2); // Arredondando para duas casas decimais
        }

        // Solicitando peso e altura ao usuário
        rl.question('Digite o seu peso (em kg): ', (peso) => {
        rl.question('Digite a sua altura (em cm): ', (altura) => {
            // Calculando o IMC com base no peso e altura fornecidos
            const imc = calcularIMC(peso, altura);
            // Exibindo o resultado no terminal
            console.log(`\nSeu IMC é: ${imc}`);
            // Classificando o IMC
            if (imc < 18.5) {
            console.log('Você está abaixo do peso. Seu IMC é', imc);
            } else if (imc >= 18.5 && imc < 25) {
            console.log('Seu peso está normal. Seu IMC é', imc);
            } else if (imc >= 25 && imc < 30) {
            console.log('Você está com sobrepeso. Seu IMC é', imc);
            } else {
            console.log('Você está obeso. Seu IMC é', imc);
            }
            // Fechando a interface de leitura
            rl.close();
        });
        });

        
   
   */