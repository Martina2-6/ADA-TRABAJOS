//Ejercicio 3: Ciclo For
//Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive).
//  Para esto, debes seguir los siguientes pasos:
//Solicitar al usuario que ingrese un número X.
//	Inicializar una variable para contar los números impares.
//	Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
//	Dentro del ciclo, verificar si el número es impar.
//	Si el número es impar, incrementar el contador de números impares.
//	Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
//	Utiliza el operador módulo (%) para verificar si un número es impar.
//	Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe imprimir: “La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5”

const prompt = require('prompt-sync')();
let x = parseInt(prompt("Ingrese un número X: "));
let contadorImpares = 0;
for (let i = 0; i <= x; i++) {
    if (i % 2 !== 0) { // Verifica si el número es impar
        contadorImpares++;
    }
}
console.log(`La cantidad de números impares desde 0 hasta ${x} es: ${contadorImpares}`);