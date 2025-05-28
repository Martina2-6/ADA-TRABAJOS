const prompt = require("prompt-sync")();
//1. Pida al usuario que ingrese dos números. 
//2. Sume ambos números. 
//3. Muestre el resultado de la suma.
let numero1 = parseFloat(prompt("ingrese el primer numero: "));
let numero2 = parseFloat(prompt("ingrese el segundo numero: "));
let resultado = numero1 + numero2;
console.log(" La suma de " + numero1 + " y " + numero2 + " es " + resultado);