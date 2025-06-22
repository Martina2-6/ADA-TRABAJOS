//Ejercicio 4: Número par o impar 
//Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar.
//  Usa una variable local para guardar el resultado.
const prompt = require('prompt-sync')();
function esPar(numero) {
    let resultado;
    if (numero % 2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es impar";
    }
    return resultado;
}
// Ejemplo de uso
let numero = parseInt(prompt("Ingrese un número: "));
let resultado = esPar(numero);
console.log(resultado);
// Ejemplo de uso con un número par
// let numeroPar = 4;
// console.log(esPar(numeroPar)); // Debería imprimir "Es par"
