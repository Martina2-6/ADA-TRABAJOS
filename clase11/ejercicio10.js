//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10.
//  Luego, pide al usuario que adivine el número hasta 3 intentos.
//  Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. 
// Si no acierta después de los 3 intentos, muestra el número secreto.
//  Usa un for para resolver este ejercicio.
const prompt = require("prompt-sync")();
let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número al azar entre 1 y 10
let intentos = 3;
console.log("Seleccione un número al azar entre 1 y 10. Tenes 3 intentos para adivinarloo.");
for (let i = 1; i <= intentos; i++) {
    let adivinanza = parseInt(prompt(`Intento ${i}: Ingresa tu número: `));
    if (adivinanza === numeroSecreto) {
        console.log("¡Felicidades! adivinaste el número secreto!!.");
        break; // Detiene los intentos restantes si acierta
    } else {
        console.log("No has acertado. Inténtalo de nuevo!!");
    }
}