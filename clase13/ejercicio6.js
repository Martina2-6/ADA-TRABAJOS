//Ejercicio 6: Convertir a minutos 
//Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos.
const prompt = require('prompt-sync')();
// Función declarada convertirHorasAMinutos
function convertirHorasAMinutos(horas) {
    return horas * 60;
}
// Ejemplo de uso
let horas = parseFloat(prompt("Ingrese el número de horas: "));
let minutos = convertirHorasAMinutos(horas);
console.log(`${horas} horas son ${minutos} minutos.`);
