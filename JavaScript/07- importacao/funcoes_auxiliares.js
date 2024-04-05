 
    function gets(){
        return 10;
    }//Pega a leitura de alguém digitando

    function print(texto){
        console.log(texto)

    }//Como se fosse a função console.log

    //module.exports.gets = gets; Outra opção
    //Para exportar 
    module.exports = { gets, print};
    //Criando um objeto literal