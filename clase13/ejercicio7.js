// Ejercicio 7: Mensaje según la hora 
//Declara una variable global llamada horaActual (puedes asignarle un valor fijo).
//  Crea una función declarada llamada mostrarSaludo que imprima 
// "Buenos días" si la hora es menor a 12, "Buenas tardes" si es entre 12 y 18, y "Buenas noches" si es mayor a 18.
const horaActual = 15; // Variable global con un valor fijo
function mostrarSaludo() {
    if (horaActual < 12) {
        console.log("Buenos días");
    } else if (horaActual >= 12 && horaActual < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
}
// Llamada a la función para mostrar el saludo
mostrarSaludo();
// Imprimir la hora actual fuera de la función
console.log(`Hora actual: ${horaActual}`);
