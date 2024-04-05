/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
 */
/* 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numPar = numeros[i];
    if (numPar % 2 === 0) {
        console.log(numPar);
    }
   
}

const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);

/* 
    const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);

*/


//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const listaDeNomes = ["Livia", "Vanessa", "Pedro", "Viviane", "João", "Vitoria"];

// Iterar sobre a lista de nomes e imprimir os que começam com "V"
console.log("Nomes que começam com a letra 'V':");
for (let i = 0; i < listaDeNomes.length; i++) {
    let nome = listaDeNomes[i];
    if (nome.charAt(0) === 'V') {//retorna o primeiro caractere
        console.log(nome);
    }
}

//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;



 const n = [];
for (let i = 10; i <= 50; i++) {
    n.push(i); /// O push pdiciona os números de 10 a 50 na array n
}

for (let i = 0; i < n.length; i++) {
    const Par = n[i];
    if (Par % 2 === 0) {
        console.log(Par);
    }
}