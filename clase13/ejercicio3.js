//Ejercicio 3: Mensaje global y local 
//Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope global". 
// Luego, crea una función llamada mostrarMensaje que declare una variable local llamada saludoLocal con el valor "Hola desde el scope local" y que imprima ambos mensajes.
const saludoGlobal = "Hola desde el scope global";
function mostrarMensaje() {
    const saludoLocal = "Hola desde el scope local";
    console.log(saludoGlobal);
    console.log(saludoLocal);
}
// Llamada a la función para mostrar los mensajes
mostrarMensaje();
// Imprimir el mensaje global fuera de la función
console.log(saludoGlobal);
// Intentar imprimir el mensaje local fuera de la función (esto generará un error)
// console.log(saludoLocal); // Esto generará un error porque saludoLocal no está definido en el scope global
