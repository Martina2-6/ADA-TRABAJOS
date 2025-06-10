//	Ejercicio 9: Última aparición de un modelo de auto
//Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
//La idea es solo registrar el total de los gastos, al finalizar la jornada.
//Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas

const prompt = require('prompt-sync')();
let gastos = [];
let semana = 1;
let totalGastos = 0;
while (semana <= 4) {
    let gasto = parseFloat(prompt(`Ingrese el gasto de la semana ${semana}: `));
    if (gasto >= 0) {
        gastos.push(gasto);
        totalGastos += gasto;
    } else {
        console.log("Gasto negativo no permitido, intente nuevamente.");
    }
    semana++;
}
console.log("Gastos ingresados por semana:");
for (let i = 0; i < gastos.length; i++) {
    console.log(`Semana ${i + 1}: $${gastos[i].toFixed(2)}`);
}
console.log(`Total de gastos en el mes: $${totalGastos.toFixed(2)}`);
