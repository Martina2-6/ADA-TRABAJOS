 //Ejercicio 2: Número mayor (función expresada) 
//Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.
const prompt = require('prompt-sync')();
// Función expresada encontrarMayor
const encontrarMayor = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}       
// Ejemplo de uso
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let mayor = encontrarMayor(numero1, numero2);
console.log(`El número mayor es: ${mayor}`);
