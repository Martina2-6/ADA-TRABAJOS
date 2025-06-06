 //. Escribe un programa que le pida al usuario un número y determine si es par o impar. 
 // Muestra un mensaje explicativo indicando qué significa cada caso.
const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Ingrese un número: "));
if (numero % 2 === 0) {
    console.log("El número es par. Un número es par si es divisible por 2 sin dejar residuo.");
}
else {
    console.log("El número es impar. Un número es impar si no es divisible por 2 sin dejar residuo.");
}

