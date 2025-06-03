//Ejercicio 6:  
//Pide al usuario que ingrese su edad.
// verifica si es mayor o menor de edad.
// Muestra un mensaje personalizado según el caso.
const prompt = require("prompt-sync")();
let edad= parseInt(prompt("Ingrese su edad: "));
if (edad >= 18) {
    console.log("Eres mayor de edad, puedes entrar a la disco.Diviertete!!");
}
else if (edad < 18 && edad >= 0) {
    console.log("Eres menor de edad, no puedes entrar es un lugar de adultos, Vuelve cuando seas mayor.");
} else {
    console.log("Edad no valida, por favor ingrese una edad correcta.");
}