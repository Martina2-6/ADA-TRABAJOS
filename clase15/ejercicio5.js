//Ejercicio 5: Buscar la posición de un elemento 
// Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. 
// Encuentra y muestra el índice del color "Azul" en la lista. 
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
let indiceAzul = colores.indexOf("Azul"); // Encuentra el índice del color "Azul"
if (indiceAzul !== -1) {
    console.log(`El índice del color "Azul" es: ${indiceAzul}`); // Muestra el índice encontrado
}   else {
    console.log('El color "Azul" no se encuentra en la lista.'); // Mensaje si no se encuentra
}               