
// 1. Solicite al usuario que ingrese un número cualquiera. 
//2. Calcule el doble de ese número. 
//3. Muestre el resultado en la consola. 
const prompt = require ("prompt-sync")();
let numero = prompt("Ingrese un  numero:");
if (isNaN(numero)) {
    console.log("El numero no es correcto");
}else {
    console.log("El doble de " + numero + " es " + (numero * 2) + ".");
    
}


