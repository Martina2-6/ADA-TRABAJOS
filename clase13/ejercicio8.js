//Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
//Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 
const prompt = require('prompt-sync')();
// Función expresada convertirCelsiusAFahrenheit
const convertirCelsiusAFahrenheit = function(celsius) {
    return (celsius * 9/5) + 32;
}   
// Ejemplo de uso
let gradosCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
let gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelsius);
console.log(`${gradosCelsius} grados Celsius son ${gradosFahrenheit} grados Fahrenheit
.`);
