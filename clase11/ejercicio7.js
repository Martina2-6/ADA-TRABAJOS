//Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división.
//  Según la operación ingresada, el programa deberá calcular y mostrar el resultado.
//  Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error.
//  Usa switch para resolverlo.
const prompt = require("prompt-sync")();
let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));
let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicación, división): ").toLowerCase();
switch (operacion) {
    case "suma":
        console.log(`El resultado de la suma es: ${numero1 + numero2}`);
        break;
    case "resta":
        console.log(`El resultado de la resta es: ${numero1 - numero2}`);
        break;
    case "multiplicación":
        console.log(`El resultado de la multiplicación es: ${numero1 * numero2}`);
        break;
    case "división":
        if (numero2 !== 0) {
            console.log(`El resultado de la división es: ${numero1 / numero2}`);
        } else {
            console.log("Error: No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación inválida. Por favor, ingresa una operación válida (suma, resta, multiplicación, división).");
}