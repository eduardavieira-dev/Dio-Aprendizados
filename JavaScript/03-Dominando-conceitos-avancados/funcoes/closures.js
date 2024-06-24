
function soma(x) {//a capacidade de amarzenar o x é a closuere
    return (y) => {
        return x + y;
    }//o valor é passado de forma indireta
}

const somaParcial = soma(10)
//quando invocou o soma ele devolveu uma função nova

console.log(somaParcial(30))
console.log(somaParcial(40))