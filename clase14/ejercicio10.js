 //Ejercicio 10: Flores Favoritas 
//Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones: 
//1. Inicializa un array vacío para almacenar las flores favoritas. 
//2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push). 
//3. Pregunta al usuario por una flor específica y verifica si está entre sus favoritas. 
//4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).
const prompt = require('prompt-sync')();
// Inicializa un array vacío para almacenar las flores favoritas
let floresFavoritas = new Array(3); // Creamos un array de tamaño 3
// Pregunta al usuario por sus tres flores favoritas
for (let i = 0; i < floresFavoritas.length; i++) {
    floresFavoritas[i] = prompt(`Ingrese su flor favorita ${i + 1}: `);
}
// Pregunta al usuario por una flor específica
let florEspecifica = prompt("Ingrese una flor específica para verificar si está entre sus favoritas: ");
// Verifica si la flor específica está entre sus favoritas
let contador = 0; // Inicializa un contador
for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i].toLowerCase() === florEspecifica.toLowerCase()) {
        contador++;
    }
}
// Muestra por consola cuántas veces se mencionó la flor específica
console.log(`La flor "${florEspecifica}" se mencionó ${contador} vez/veces entre sus flores favoritas.`);
// Muestra todas las flores favoritas
console.log("Sus flores favoritas son: " + floresFavoritas.join(", "));
// Fin del ejercicio
