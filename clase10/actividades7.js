//	Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales
// luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
//Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea)
// eres libre de elegir el que desees, eso si, investiga sobre el que usaras.
const prompt = require("prompt-sync")();
let variable1 = prompt("Ingresa el valor de la primera variable: ");
let variable2 = prompt("Ingresa el valor de la segunda variable: ");
console.log("Antes del intercambio:");
console.log("Variable 1:", variable1);  
console.log("Variable 2:", variable2);
// Método 1: Usando una variable temporal
let temporal = variable1;
variable1 = variable2;
variable2 = temporal;
console.log("Después del intercambio:");
console.log("Variable 1:", variable1);
console.log("Variable 2:", variable2);
// Método 2: Usando asignación simultánea
[variable1, variable2] = [variable2, variable1];
console.log("Después del intercambio (asignación simultánea):");
console.log("Variable 1:", variable1);
console.log("Variable 2:", variable2);
// Método 3: Usando aritmética (solo para números)
if (!isNaN(variable1) && !isNaN(variable2)) {
    variable1 = parseFloat(variable1);
    variable2 = parseFloat(variable2);
    variable1 = variable1 + variable2;
    variable2 = variable1 - variable2;
    variable1 = variable1 - variable2;
    console.log("Después del intercambio (aritmética):");
    console.log("Variable 1:", variable1);
    console.log("Variable 2:", variable2);
}
// Final.
