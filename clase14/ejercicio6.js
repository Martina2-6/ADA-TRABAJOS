 //Ejercicio 6: El deportista 
//Para este ejercicio deberán definir un objeto literal “deportista”, con los siguientes atributos: nombre, energía, experiencia. Ademas queremos poder pedirle al deportista que entrene
//  Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.” 
//La función entrenarHoras tiene las siguientes tres características: 
// Recibe por parámetro la cantidad de horas. 
//Resta a su energía (this.energia) la cantidad de horas x 5. 
// Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.
const prompt = require('prompt-sync')();
// Definición del objeto literal deportista
const deportista = {
    nombre: "Martu",
    energia: 100,
    experiencia: 0,
    
    // Método para entrenar horas
    entrenarHoras: function(horas) {
        this.energia -= horas * 5;
        this.experiencia += horas * 2;
        console.log(`${this.nombre} ha entrenado ${horas} horas.`);
        console.log(`Energía restante: ${this.energia}`);
        console.log(`Experiencia ganada: ${this.experiencia}`);
    }
};
// Ejemplo de uso
let horas = parseInt(prompt("Ingrese la cantidad de horas que desea entrenar: "));
deportista.entrenarHoras(horas);
// Mostrar el estado final del deportista
console.log(`Estado final de ${deportista.nombre}:`);
console.log(`Energía: ${deportista.energia}`);
console.log(`Experiencia: ${deportista.experiencia}`);
// Nota: Asegúrate de que la energía no sea negativa
if (deportista.energia < 0) {
    deportista.energia = 0;
    console.log(`${deportista.nombre} está agotado y no puede entrenar más.`);
}
// Aseguramos que la experiencia no sea negativa
if (deportista.experiencia < 0) {
    deportista.experiencia = 0;
    console.log(`${deportista.nombre} no ha ganado experiencia.`);
}
// Fin del ejercicio