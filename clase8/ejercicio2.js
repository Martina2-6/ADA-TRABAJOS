const prompt = require ("prompt-sync")();
//1. Pida al usuario que ingrese un número. 
//2. Verifique si el número es positivo, negativo o igual a cero. 
//3. Muestre un mensaje indicando cuál es el caso.
let numero = prompt("ingrese un numero: ");
if (numero > 0) {
    console.log("el numero" + numero + " es positivo");
}else if (numero < 0){
    console.log("el numero" + numero + "es negativo");
}else {
    console.log(" el numero " + numero + " es igual a cero");
}
    