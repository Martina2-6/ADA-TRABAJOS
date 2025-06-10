//	Ejercicio 5: Uso de Arrays y Condicionales
//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array.
//  Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array.
//  (Pueden desglosar en pasos el código si eso les facilita su desarrollo)
const prompt = require('prompt-sync')();
let nombres = []; // Definimos un array vacío para almacenar los nombres
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
    nombres.push(nombre); // Agregamos el nombre al array
}
let nombreBuscado = prompt("Ingrese un nombre para buscar: ");
let encontrado = false; // Variable para indicar si el nombre fue encontrado
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
        encontrado = true; // Si encontramos el nombre, cambiamos la variable a true
        break; // Salimos del bucle ya que no es necesario seguir buscando
    }
}
if (encontrado) {
    console.log(`El nombre "${nombreBuscado}" se encuentra en el array.`);
}
else {
    console.log(`El nombre "${nombreBuscado}" no se encuentra en el array.`);
}


