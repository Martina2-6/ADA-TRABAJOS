const prompt = require('prompt-sync')();

// Ejercicio 7:  

//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras.
//  Muestra el resultado con un mensaje
// Averigua como pasar de kg a libras, Pista: 2.20462

let pesoKg = parseFloat(prompt("Ingresa tu peso en kg: "));
let pesoLibras = pesoKg * 2.20462;
console.log("Tu peso en libras es: " + pesoLibras);
