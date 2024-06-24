
//arquivo csv=arquivo de dados como um exel em que as colunas são separadas por ; e a coluna por Enter

//fazer leitura de arquivos no node


const fs= require('fs')

const path = require('path')
//Quando usa-se pasta o direname no node é a pasta atual
const filePath =path.resolve(__dirname, 'tarefas.csv')



const promessaDeLeituraDeArquivo =  fs.promises.readFile(filePath)

promessaDeLeituraDeArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDeArquivo) => textoDeArquivo.split('\n').slice(1))
    .then((linahsSemCabecalho)=> linahsSemCabecalho.map((linha)=>{
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((erro)=> console.error('Deu ruim',erro))