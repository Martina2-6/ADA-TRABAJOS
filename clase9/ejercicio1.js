//Ejercicio 1:  
//Declara dos variables numéricas numero1 y numero2
// Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales. 
const prompt = require("prompt-sync")();
let numero1 = parseInt(prompt("ingrese el primer numero: "));
let numero2 = parseInt(prompt("ingrese el segundo numero: "));

//numero1   > numero2 -  > true -  > "el primer numero es mayor que el segundo"
//numero1   > numero2 -  > false -  > "el segundo numero es mayor que el primero"
//numero1 === numero2 -  > true -  > "los numero ingresados son iguales"

if (numero1 === numero2)  {
    console.log("El numero " + numero1 + " es igual que " + numero2);

} else if ( numero1 > numero2) {
    console.log("El numero " + numero1 + " es mayor que " + numero2);
} else {
    console.log("El numero " + numero1 + " es menor que " + numero2); 
}
   



