var display = document.querySelector('#display');
//Procura no doc através do .querySelector a tag com id display 

function showDisplay(value){
    if(value == "."){ // . ou string vazia
        display.value = '0';
    }
    display.value += value;
    //O valor q esticer no display vai receber ele mesmo junto com o valor que vier com o parametro(os botôes)
}

function clearAll(){
    display.value = "";
}

function result() {
    let y = eval(display.value);
    //eval pega os números e tranforma numa equação que pode ser lida no js
    display.value = y;

    if(display.value == "undefined"){
        display.value = "";
    } 
    
}