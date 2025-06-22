// Ejercicio 4: Calcular descuento por cantidad 
//Solicita al usuario la cantidad de productos comprados y el precio unitario. 
//Usa una función flecha para calcular el total con descuento según la cantidad.
const prompt = require('prompt-sync')();
// Función flecha para calcular el total con descuento según la cantidad
const calcularTotalConDescuento = (cantidad, precioUnitario) => {
    let total = cantidad * precioUnitario;
    if (cantidad >= 10) {
        total *= 0.9; // 10% de descuento
    } else if (cantidad >= 5) {
        total *= 0.95; // 5% de descuento
    }
    return total;
}
// Ejemplo de uso
let cantidad = parseInt(prompt("Ingrese la cantidad de productos comprados: "));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto: "));
let totalConDescuento = calcularTotalConDescuento(cantidad, precioUnitario);
console.log(`El total a pagar con descuento es: ${totalConDescuento.toFixed(2)}`);
