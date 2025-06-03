// Ejercicio 3: 
//Declara dos variables booleanas condicion1 y condicion2
// Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.

const prompt = require("prompt-sync")();

let condicion1 = prompt ("Ingresa la primera condicion (true o false): ");
let condicion2 = prompt ("Ingresa la segunda condicion(true o false): ");

condicion1 = (condicion1 === "true");
condicion2 = (condicion2 === "true");
  
if (condicion1 && condicion2) {
  console.log("Ambas condiciones son verdaderas");
} else if (condicion1 || condicion2) {
  console.log("Al menos una condicion es verdadera");
} else {
  console.log("Ambas condiciones son falsas");
}


