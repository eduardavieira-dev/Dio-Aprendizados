
  // const funcoes = require('./funcoes_auxiliares'); Voce pode declarar assim ou ja chamar o get e o print direto com o destructing

  // console.log(funcoes.gets());
  // console.log(funcoes);

  //Destruir um objeto, vc já pode fazer o destructring definindo a variavel
    //É uma forma de fazer muito código com pouca linha
    
  const {gets, print} = require('./funcoes_auxiliares');
//Eles são objetos literais
    print(gets());
  