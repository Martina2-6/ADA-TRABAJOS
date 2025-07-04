//Calcula el total de ventas de productos seleccionados 
//Supón que tienes una lista de productos con sus precios en formato de objeto: 
//const products = [ 
//{ name: 'Laptop', price: 1000 }, 
//{ name: 'Mouse', price: 25 }, 
//{ name: 'Teclado', price: 50 }, 
//{ name: 'Monitor', price: 200 }, 
//{ name: 'Audífonos', price: 75 } 
//]; 
//Queremos: 
// Seleccionar los productos cuyo precio sea mayor o igual a 50. 
// Obtener solo los nombres de esos productos. 
// Calcular el precio total sumando los precios de los productos seleccionados. 
// Imprime el total y los nombres de los productos seleccionados en la consola.
const products = [ 
    { name: 'Laptop', price: 1000 }, 
    { name: 'Mouse', price: 25 }, 
    { name: 'Teclado', price: 50 }, 
    { name: 'Monitor', price: 200 }, 
    { name: 'Audífonos', price: 75 } 
];
let productosSeleccionados = products.filter(function(producto) {
    return producto.price >= 50; // Filtra los productos con precio mayor o igual a 50
});
let nombresProductos = productosSeleccionados.map(function(producto) {
    return producto.name; // Obtiene solo los nombres de los productos seleccionados
});
let totalPrecio = productosSeleccionados.reduce(function(acumulador, productoActual) {
    return acumulador + productoActual.price; // Suma los precios de los productos seleccionados
}, 0); // Inicia el acumulador en 0
console.log(`Total de productos seleccionados: ${nombresProductos.join(', ')}`); // Muestra los nombres de los productos
console.log(`Precio total: $${totalPrecio}`); // Muestra el precio total
// Resultado esperado:
// Total de productos seleccionados: Teclado, Monitor, Audífonos
// Precio total: $1325



//Esto se me ocurrio a mi, no es parte del ejercicio original jiji.
//Cree una funcion que permita mostrar los productos
function mostrarProductos(productos) {
    productos.forEach(function(producto) {
        console.log(`♡ Producto: ${producto.name}, ➷ Precio: $${producto.price}`);
    });
}
// Llamada a la función para mostrar los productos
mostrarProductos(products);
// Resultado esperado:
// Producto: Laptop, Precio: $1000
// Producto: Mouse, Precio: $25
// Producto: Teclado, Precio: $50
// Producto: Monitor, Precio: $200
// Producto: Audífonos, Precio: $75
//Crea una funcion que me deje elegir un producto por su nombre
function elegirProductoPorNombre(nombre) {
    let productoElegido = products.find(function(producto) {
        return producto.name.toLowerCase() === nombre.toLowerCase(); // Busca el producto por nombre
    });
    if (productoElegido) {
        console.log(`Producto elegido: ${productoElegido.name}, Precio: $${productoElegido.price}`);
    } else {
        console.log(`No se encontró el producto con el nombre: ${nombre}`);
    }
}   
// Llamada a la función para elegir un producto por nombre
elegirProductoPorNombre('Teclado'); // Producto elegido: Teclado, Precio: $50
elegirProductoPorNombre('Celular'); // No se encontró el producto con el nombre: Celular

