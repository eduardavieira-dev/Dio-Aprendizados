//Assync e await é uma forma de escrever codigo assicrono como se estivesse escrevendo codigo sincrono
const { error } = require('console')
const fs= require('fs')
const path = require('path')

const filePath =path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
   try{
    const arquivo = await fs.promises.readFile(filePath)
    const textoArquivo = arquivo.toString('utf8')
    console.log(textoArquivo)
   } catch{
     console.error('Deu ruim', error);
   }finally{
    console.log('Finalizou')
   }
}
//um açucar sitatico para criar promessas new e facilita o then e catch
//voce pode lidar com um codigo assincrono como se ele fosse sincrono com o JS
buscarArquivo()