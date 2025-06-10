//	Ejercicio 9: Última aparición de un modelo de auto
//Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
//La idea es solo registrar el total de los gastos, al finalizar la jornada.
//Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
//Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 

//a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
//b)	La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
//c)	Por último, es necesario tener el total de gastos realizados en el mes.
//d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
//Posibles matrices para comprobar los resultados.
 	//Día 1	Día 2	Día 3	Día 4	Día 5	Día 6	Día 7
//Semana 1	 1135	 2500	 900	 1600	 2800	 3650	 1100
//Semana 2	 1750	 1890	 1900	 1300	 898	 1750	 2800
//Semana 3	 1700	 1150	 1690	 1900	 1770	 4500	 2560
//Semana 4	 800	 1250	 1430	 2100	 1980	 1270	 950
const prompt = require('prompt-sync')();
let matrizGastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];
let semana = parseInt(prompt("Ingrese el número de la semana (1-4): ")) - 1;
if (semana >= 0 && semana < 4) {
    let totalSemana = matrizGastos[semana].reduce((acc, gasto) => acc + gasto, 0);
    console.log(`Total de gastos en la semana ${semana + 1}: $${totalSemana}`);
}
let dia = parseInt(prompt("Ingrese el número del día (1-7): ")) - 1;
if (dia >= 0 && dia < 7) {
    let totalDia = 0;
    for (let i = 0; i < matrizGastos.length; i++) {
        totalDia += matrizGastos[i][dia];
    }
    console.log(`Total de gastos en el día ${dia + 1}: $${totalDia}`);
}
let totalMes = 0;
for (let i = 0; i < matrizGastos.length; i++) {
    for (let j = 0; j < matrizGastos[i].length; j++) {
        totalMes += matrizGastos[i][j];
    }
}
console.log(`Total de gastos en el mes: $${totalMes}`);
let maxGastosSemana = 0;
let semanaMax = 0;
for (let i = 0; i < matrizGastos.length; i++) {
    let sumaSemana = matrizGastos[i].reduce((acc, gasto) => acc + gasto, 0);
    if (sumaSemana > maxGastosSemana) {
        maxGastosSemana = sumaSemana;
        semanaMax = i;
    }
}
console.log(`La semana con más gastos es la semana ${semanaMax + 1} con un total de $${maxGastosSemana}`);
let maxGastoDia = 0;
let diaMax = 0;
for (let i = 0; i < matrizGastos.length; i++) {
    for (let j = 0; j < matrizGastos[i].length; j++) {
        if (matrizGastos[i][j] > maxGastoDia) {
            maxGastoDia = matrizGastos[i][j];
            diaMax = j;
        }
    }
}
console.log(`El día con más gastos es el día ${diaMax + 1} con un total de $${maxGastoDia}`);

