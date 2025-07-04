//Gestión de inventario de una tienda 
//Eres encargado de una tienda y tienes un inventario inicial de productos.
//  La lista de productos es: 
//let inventario = ["Laptop", "Tablet", "Teléfono", "Monitor"];
//Debes realizar las siguientes acciones: 
// Agregar un nuevo producto "Impresora" al inventario usando el método adecuado. 
// Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado. 
// Eliminar el primer producto del inventario. 
// Mostrar la lista actualizada de productos en una sola cadena, separados por comas.
let inventario = ["Laptop", "Tablet", "Teléfono", "Monitor"];
// Agregar un nuevo producto "Impresora" al inventario
inventario.push("Impresora"); // Agrega "Impresora" al final del
// inventario
console.log(`Inventario actualizado: ${inventario.join(", ")}`); // Muestra el
// inventario actualizado
// Comprobar si "Tablet" está en el inventario
if (inventario.includes("Tablet")) {
    console.log("El producto 'Tablet' está en el inventario.");
}
else {
    console.log("El producto 'Tablet' no está en el inventario.");
}
// Eliminar el primer producto del inventario
inventario.shift(); // Elimina el primer producto
console.log(`Inventario después de eliminar el primer producto: ${inventario.join(", ")}`
); // Muestra el inventario actualizado
// Resultado esperado:
// Inventario actualizado: Laptop, Tablet, Teléfono, Monitor, Impresora
// El producto 'Tablet' está en el inventario.


