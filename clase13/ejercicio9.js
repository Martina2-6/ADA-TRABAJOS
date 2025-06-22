// Ejercicio 9: Contar hasta un número 
//Crea una función declarada llamada contarHasta que reciba un número y use un bucle para imprimir todos los números desde 1 hasta ese número.
const prompt = require('prompt-sync')();
// Función declarada contarHasta
function contarHasta(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}
// Ejemplo de uso
let numero = parseInt(prompt("Ingrese un número: "));
contarHasta(numero);
