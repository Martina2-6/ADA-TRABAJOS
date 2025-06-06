//1.	Pide al usuario que ingrese su nombre.
//2.	Pide al usuario que ingrese su edad.
//3.	Pide al usuario que ingrese su peso.
//4.	Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
const prompt = require("prompt-sync")();
let nombre = prompt("Ingresa tu nombre: ");
let edad = parseInt(prompt("Ingresa tu edad: "));   
let peso = parseFloat(prompt("Ingresa tu peso: "));

console.log("Holuu " + (nombre) +", tenes " + (edad) + " años y pesas " + (peso) + " kg.");
let edad_minima = 18;
let edad_maxima = 99;
if (edad < edad_minima || edad > edad_maxima) {
    console.log("Debes ser mayor de edad para ingresar al sistema.");
} 
// Final