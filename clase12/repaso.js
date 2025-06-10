const prompt = require('prompt-sync')();
let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número al azar entre 1 y 10
let acertado = false;

for (let intento = 1; intento <= 3; intento++) {
    const adivinanza = parseInt (prompt(`Intento ${intento}: adivina un número (1-10): `));

    switch (true) {
      case adivinanza === numeroSecreto:
        console.log(`¡Felicidades! Adivinaste el número en el ${intento}º intento!!`);
        acertado = true;
        break;
      case adivinanza < numeroSecreto:
        console.log("El número secreto es mayor que tu adivinanza!!");
        break;
      case adivinanza > numeroSecreto:    
        console.log("El número secreto es menor que tu adivinanza!!");
        break;
    }
    if (acertado ? true : false) break 
}        if (!acertado) {
    console.log(`No acertaste después de 3 intentos.que triste :( `);
}

