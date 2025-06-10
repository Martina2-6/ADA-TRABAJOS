//	Ejercicio 8: Rojo y Verde
//Para este ejercicio vamos a generar dos funciones:
//a) Una va a sumar los valores en la diagonal marcada en rojo.
//b) La otra va a marcar los valores de la diagonal marcada en verde.
//Ambas funciones deben devolver un resultado único. Rojo: 505
//Verde 505
//IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. ¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!

const prompt = require('prompt-sync')();
// Definimos una matriz de 5x5 llena de números enteros y positivos
const matriz = [
    [1, 2, 72, 16, 5],
    [6, 77, 8, 9, 10],
    [11, 26, 13, 35, 15],
    [16, 10, 1, 19, 20],
    [21, 22, 26, 24, 25]
]; 
// Función para sumar los valores en la diagonal marcada en rojo
function sumarDiagonalRoja(matriz) {
    let sumaRoja = 0;
    for (let i = 0; i < matriz.length; i++) {
        sumaRoja += matriz[i][i]; // Suma los elementos de la diagonal principal
    }
    return sumaRoja;
}
// Función para marcar los valores de la diagonal marcada en verde
function marcarDiagonalVerde(matriz) {
    let sumaVerde = 0;
    let diagonalVerde = []; // Array para almacenar los valores de la diagonal verde
    for (let i = 0; i < matriz.length; i++) {
        diagonalVerde.push(matriz[i][matriz.length - 1 - i]); // Agrega los elementos de la diagonal secundaria al array
        sumaVerde += matriz[i][matriz.length - 1 - i]; // Suma los elementos de la diagonal secundaria
    }
    return { suma: sumaVerde, diagonal: diagonalVerde };
}

// Llamamos a las funciones y mostramos los resultados
const sumaRoja = sumarDiagonalRoja(matriz);
const resultadoVerde = marcarDiagonalVerde(matriz);
console.log("Suma de la diagonal roja:", sumaRoja); // Imprime la suma de la diagonal roja
console.log("Suma de la diagonal verde:", resultadoVerde.suma); // Imprime la suma de la diagonal verde
console.log("Valores de la diagonal verde:", resultadoVerde.diagonal); // Imprime los valores de la diagonal verde
// Resultado esperado:
// Suma de la diagonal roja: 505
// Suma de la diagonal verde: 505

 