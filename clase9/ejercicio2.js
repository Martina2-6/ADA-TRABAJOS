// Ejercicio 2:  
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO 
// con valores numéricos de tu elección.
//  Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.
const prompt = require("prompt-sync")();
const rango_maximo = 30;
const rango_minimo = 10;
let numero = parseFloat(prompt("ingrese un numero: "));

if (numero < rango_minimo) {
  console.log(`el numero ${numero} no esta dentro del rango`);
} else if (numero > rango_maximo) {
  console.log(`el numero ${numero} no esta dentro del rango`);
} else {
  console.log(`el numero ${numero} si esta dentro del rango`);
}

