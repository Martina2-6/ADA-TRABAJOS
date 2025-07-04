 //Simulador de una cola de atención al cliente 
 // Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno.
 //  Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno.
 //  Realiza lo siguiente: 
 // 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola. 
 // 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial. 
//3. Al final, muestra cuántos clientes fueron atendidos en total. 

let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let atendidos = 0;
while (clientes.length > 0) {
    let clienteActual = clientes.shift(); // Atiende al primer cliente en la cola
    atendidos++; // Incrementa el contador de clientes atendidos

    if (clienteActual === "VIP") {
        console.log(`Atendiendo al cliente VIP: ${clienteActual} con prioridad.`);
    } else {
        console.log(`Atendiendo al cliente: ${clienteActual}`);
    }
}
console.log(`Total de clientes atendidos: ${atendidos}`); // Muestra el total de clientes atendidos
// Resultado esperado:
// Atendiendo al cliente: Ana
// Atendiendo al cliente: Carlos
// Atendiendo al cliente VIP: VIP con prioridad.