 //Ejercicio 2: Calcular promedio de calificaciones 
//Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.
const prompt = require('prompt-sync')();
// Función flecha para calcular el promedio de calificaciones
const calcularPromedio = (calificaciones) => {
    let suma = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    return suma / calificaciones.length;
}
// Ejemplo de uso
let calificaciones = [];
for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}: `));
    calificaciones.push(calificacion);
}
let promedio = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);
