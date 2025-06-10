//	Ejercicio 6: Iguales a 10 pero menores de 1000
//Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.
let matriz = [
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4],

] 
let suma = 0; // Inicializamos la variable suma en 0
for (let i = 0; i < matriz.length; i++) { // Recorremos las filas de la matriz
    for (let j = 0; j < matriz[i].length; j++) { // Recorremos las columnas de cada fila
        if (matriz[i][j] >= 10 && matriz[i][j] < 1000) { // Verificamos si el número está entre 10 y 999
            suma += matriz[i][j]; // Sumamos el número a la variable suma
        }
    }
}
console.log("La suma de los números mayores o iguales a 10 y menores que 1000 es:", suma); // Imprimimos el resultado

 
