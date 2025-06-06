//Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100.
//  Utiliza un ciclo for para resolverlo.
const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Ingresa un número entero positivo: "));
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingresa un número entero positivo válido.");
}
else {
    console.log(`Los múltiplos de ${numero} entre 1 y 100 son:`);
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) {
            console.log(i);
        }
    }
}