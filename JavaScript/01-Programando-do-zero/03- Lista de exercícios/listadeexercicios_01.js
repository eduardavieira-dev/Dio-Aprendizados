/*
    1) Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média - (nota1 + nota2 + nota3)/3

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média maior que 7, passou de semestre;

*/

    const nota1 = 5;
    const nota2 = 8;
    const nota3 = 9;

    const media= (nota1+nota2+nota3)/3;

    if(media < 5){
        console.log('Você foi reprovado');
    } else if(media >=5 && media<=7){
        console.log('Você está de recuperação');
    }else{
        console.log('Você foi aprovado')
    }


    console.log('Sua média foi de', media.toFixed(1));