//Clasificación de palabras según su longitud 
//Tienes una lista de palabras en una oración. Debes: 
// Dividir la oración en palabras individuales. 
// Clasificar las palabras en dos categorías: 
//▪ Cortas (menos de 5 letras) 
//▪ Largas (5 letras o más) 
// Mostrar ambas listas de palabras clasificadas. 
//La oración es: "JavaScript es un lenguaje poderoso y versátil".
let oracion = "JavaScript es un lenguaje poderoso y versátil";
let palabras = oracion.split(" "); // Divide la oración en palabras individuales
let cortas = []; // Lista para palabras cortas
let largas = []; // Lista para palabras largas
for (let palabra of palabras) {
    if (palabra.length < 5) {
        cortas.push(palabra); // Añade a la lista de palabras cortas
    } else {
        largas.push(palabra); // Añade a la lista de palabras largas
    }
}
console.log(`Palabras cortas: ${cortas.join(", ")}`); // Muestra las palabras cortas
console.log(`Palabras largas: ${largas.join(", ")}`); // Muestra las palabras largas
// Resultado esperado:
// Palabras cortas: es, un, y
// Palabras largas: JavaScript, lenguaje, poderoso, versátil
