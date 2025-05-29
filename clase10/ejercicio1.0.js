//simular un sistema de ingreso a una nave espacial donde los tripulantes deben pasar filtros de validacion usando variables,coercion y operadores logicos.
//desarrollo:
//pedi a tus alumnas que creen un script que haga lo siguiente:

const prompt = require ("prompt-sync")();
let nombre = prompt("ingrese su nombre galactico: ");
let edad = parseInt(prompt("ingrese su edad terrestre: "));
let especie = prompt("cual es tu especie: (humano,alien,robot): ");


let tienePermiso = (edad>= 18 && especie!=="") || nombre === "capitana leia";

const mensaje = tienePermiso
    ?" bienvenido/a a bordo de mi nave " + (nombre || "tripulante desconocido") + "!" +" ,que la fuerza te acompañe!!"
    : "Acceso denegado, usted no puede ingresar a la nave,NO cumple requisitos";
console.log(mensaje);




