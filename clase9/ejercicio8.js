//Ejercicio 8:  
//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo 
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno.
//Investiga sobre los triángulos para determinar la formula 

const prompt = require("prompt-sync")();

let lado1 = parseFloat(prompt("Ingresa la longitud del primer lado: "));
let lado2 = parseFloat(prompt("Ingresa la longitud del segundo lado:"));
let lado3 = parseFloat(prompt("Ingresa la longitud del tercer lado: "));
if (lado1 === 60 && lado2 === 60 && lado3 === 60) {
    console.log("El triángulo es Equilátero.");
}else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es Isósceles.");
  }  else {
    console.log("El triángulo es Escaleno."); 
  }
