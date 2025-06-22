//Ejercicio 5: Concatenar nombres (función expresada) 
//Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.
const prompt = require('prompt-sync')();
// Función expresada concatenarNombres
const concatenarNombres = function(nombre, apellido) {
    return `${nombre} ${apellido}`;
}

// Ejemplo de uso
let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");
let nombreCompleto = concatenarNombres(nombre, apellido);
console.log(`Tu nombre completo es: ${nombreCompleto}`);
