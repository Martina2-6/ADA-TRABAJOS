//Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10.
//  Usa un ciclo for.
const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar: "));
if (isNaN(numero)) {
    console.log("Por favor!!, ingresa un número válido.");
}
else {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}