//Ejercicio 5: 
//Escribe un programa que pida al usuario que ingrese tres números 
//determine cuál es el mayor de los tres.

const prompt = require("prompt-sync")();

let numero1 = parseInt(prompt("Ingresa el primer numero: "));
let numero2 = parseInt(prompt("Ingresa el segundo numero: "));
let numero3 = parseInt(prompt("Ingresa el tercer numero: "));

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El mayor de los tres numero es: " + numero1);
}   
else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El mayor de los tres numero es: " + numero2);
} else {
    console.log("El mayor de los tres numero es: " + numero3);
}