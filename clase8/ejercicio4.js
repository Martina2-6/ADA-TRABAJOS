
//1. Solicite al usuario que ingrese un número entero. 
//2. Determine si el número es par o impar. 
//3. Muestre un mensaje indicando si el número es par o impar.
const prompt = require("prompt-sync")();
let naranja =parseInt( prompt("ingrese un valor entero "));
if (naranja % 2 === 0) {
    console.log(" el valor " + naranja + " es par");
}else {
    console.log(" el valor " + naranja + " es impar");

}