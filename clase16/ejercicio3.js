 //Ejercicio 3: Encuentra el primer número mayor a 10 
//Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer número de la lista que sea mayor a 10. Recuerda que el resultado debe ser únicamente el primer número que cumpla esta condición, no todos los numeros lo hagan
let numeros = [5, 8, 12, 20, 3];
let primerMayorA10 = numeros.find(function(numero) {
    return numero > 10; // Encuentra el primer número mayor a 10
}
);
console.log(primerMayorA10); // Muestra el primer número mayor a 10
// Resultado esperado:
// 12
