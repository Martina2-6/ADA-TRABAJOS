// Ejercicio 6: Buscar la última posición de un elemento repetido 
// Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última posición en la que aparece el número 7.
let numeros = [2, 5, 7, 2, 8, 7];
let ultimaPosicion7 = numeros.lastIndexOf(7); // Encuentra la última posición   
if (ultimaPosicion7 !== -1) {
    console.log(`La última posición del número 7 es: ${ultimaPosicion7}`); // Muestra la última posición encontrada
}
else {
    console.log('El número 7 no se encuentra en la lista.'); // Mensaje si no se encuentra
}
