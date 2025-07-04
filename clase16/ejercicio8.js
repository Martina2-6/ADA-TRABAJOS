 //Ejercicio 8: Busca un nombre específico 
//Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo. 

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
let nombreBuscado = 'Laura';
let encontrado = nombres.find(function(nombre) {
    return nombre === nombreBuscado; // Busca el nombre específico
});
if (encontrado) {
    console.log(`El nombre encontrado es: ${encontrado}`); // Muestra el nombre encontrado
}
else {
    console.log('Nombre no encontrado'); // Muestra un mensaje si no se encuentra el nombre
}
// Resultado esperado:
// El nombre encontrado es: Laura