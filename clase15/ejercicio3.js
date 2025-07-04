//Ejercicio 3: Agregar y eliminar a la fila de mascotas 
// Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"].
//  Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista.
//  Luego, atiende a la primera mascota de la fila y muéstrala.
//  Finalmente, muestra la lista actualizada.
let mascotas = ["Perro", "Gato", "Conejo"];
mascotas.unshift("Hámster"); 
// Agrega el "Hámster" al inicio de la lista
let atendida = mascotas.shift();
// Atiende a la primera mascota de la fila
console.log(`La mascota atendida es: ${atendida}`); // Muestra la mascota atendida
console.log(`Lista actualizada de mascotas: ${mascotas}`); // Muestra la lista actualizada
// Resultado esperado:
// La mascota atendida es: Hámster
// Lista actualizada de mascotas: ["Gato", "Conejo"]