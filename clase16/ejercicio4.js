//Ejercicio 4: Calcula la suma total de los números 
//Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, 
//imprime el total en la consola.
let numeros = [1, 2, 3, 4];
let sumaTotal = numeros.reduce(function(acumulador, numeroActual) {
    return acumulador + numeroActual; // Suma cada número al acumulador
}, 0); // Inicia el acumulador en 0
console.log(sumaTotal); // Muestra la suma total de los números
// Resultado esperado:
// 10