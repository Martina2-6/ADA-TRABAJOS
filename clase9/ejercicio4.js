//Ejercicio 4:  
//Declara una variable nombre 
// pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre. 
const prompt = require("prompt-sync")();

let nombre = prompt("Ingresa tu nombre aqui: ");
let minombre = ("martina");

if (nombre === minombre) {
    console.log("Hola " + minombre + " bienvenida!!");
} else if (nombre !== minombre) {
console.log("Hola " + nombre + "!! ,no es el mismo nombre ingresado anteriormente, intentalo de nuevo.");
}
