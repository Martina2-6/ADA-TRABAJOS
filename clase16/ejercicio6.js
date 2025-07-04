 //Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra 
//Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. 
//Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!". 
let palabras = ['hola', 'mundo', 'javascript'];
let palabrasTransformadas = palabras.map(function(palabra) {
    return '¡' + palabra + '!'; // Agrega el prefijo y el sufijo a cada palabra
});

console.log(palabrasTransformadas); // Muestra la lista de palabras transformadas
// Resultado esperado:
// ['¡hola!', '¡mundo!', '¡javascript!']
