 //Ejercicio 1: Calcular el precio final con IVA 
//Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.
const prompt = require('prompt-sync')();
// Función flecha para calcular el precio final con IVA
const calcularPrecioFinal = (precio, iva) => {
    return precio + (precio * iva / 100);
}

// Ejemplo de uso
let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA: "));
let precioFinal = calcularPrecioFinal(precio, iva);
console.log(`El precio final del producto con IVA es: ${precioFinal.toFixed(2)}`);
