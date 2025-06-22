// Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
//Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial. 
const prompt = require('prompt-sync')();
// Función expresada calcularFactorial
const calcularFactorial = function(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
// Ejemplo de uso
let numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);
