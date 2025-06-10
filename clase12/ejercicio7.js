//	Ejercicio 7: Matriz 5x5
//Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos.
//  Luego, escribe un algoritmo para sumar todos los números en la matriz.
const matriz = [
    [1, 2, 72, 16, 5],
    [6, 7, 8, 9, 10],
    [11, 26, 13, 35, 15],
    [16, 10, 1, 19, 20],
    [21, 22, 26, 24, 25]
]; 
let suma = 0;
for (let i = 0; i < matriz.length; i++) { // Recorremos las filas de la matriz
    for (let j = 0; j < matriz[i].length; j++) { // Recorremos las columnas de cada fila
        suma += matriz[i][j]; // Sumamos el número a la variable suma
    }
}
console.log("La suma de todos los números en la matriz es:", suma); // Imprimimos el resultado

