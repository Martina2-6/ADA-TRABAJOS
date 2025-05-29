//probando let nombres
//intentos
const prompt = require ("prompt-sync")();
let nombre = prompt("pone tu nombre o apodo: ");
let edad = parseInt(prompt("pone tu edad: "));
let altura =parseFloat(prompt("pone cuanto medis: "));
let colorOjos= prompt("pone el color de tus ojos (azul,verde,rojo): ");


let tienePermiso = (edad>= 10 && altura>=1.20) || nombre === "bichito de luz";

const mensaje = tienePermiso
     ?"Puede entrar al juego, " + (nombre || "jugador desconocido") + "!" + " Que lo disfrutes muchooo!"
        :"No puede entrar al juego, " + (nombre || "jugador desconocido") + ", no cumple los requisitos basicos";
console.log(mensaje);