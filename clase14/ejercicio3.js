 //Ejercicio 3: Clasificación de edades 
//Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.
const prompt = require('prompt-sync')();
// Función flecha para clasificar la edad

const clasificarEdad = (edad) => {
    if (edad < 0) {
        return "Edad no válida";
    } else if (edad <= 12) {
        return "Niño";
    } else if (edad <= 19) {
        return "Adolescente";
    } else if (edad <= 64) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
}
// Ejemplo de uso
let edad = parseInt(prompt("Ingrese su edad: "));
let clasificacion = clasificarEdad(edad);
console.log(`La clasificación de la edad ${edad} es: ${clasificacion}`);
