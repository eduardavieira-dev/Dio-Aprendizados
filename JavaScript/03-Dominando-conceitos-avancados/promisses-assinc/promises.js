//Promisse é um objeto usado para processamento assincrono. Basicamente represanta um valor que pode estar disponivel agora, no futuro ou nunca

// Assincronismo é quando não executa imediatamente. Demora um tempo pra executar em algum momento essa tarefa termina e recebemos o controle de volta
//Ex. Quando vamos ler um arquivo no disco e ele vai ler um monte de coisa no software e quando ele acha ele devolve aquilo lido e podemos manipular ele

const promessaNumQualquer = new Promise((resolve, reject) =>{
    // resolve()

    //simbolizar o assincronismo, abaixo
    setTimeout(()=>{
        const numero = parseInt(Math.random() * 100)
        resolve(numero) 
    }, 1000)//demora 1s e te retorna

    // reject()
})
//abaixo vc consegue atribuir 3 callbacks
//É uma forma de manipular o assincronismo
promessaNumQualquer
    .then((value)=>{
        console.log(value)
        return value + 10
    })
    .then((value)=>{
        console.log(value)
    })
    .catch((error)=>{
        console.error(error);
    })
    .finally(()=>{
        console.log('Finalizou!')
    })