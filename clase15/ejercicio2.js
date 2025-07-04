// Ejercicio 2: Eliminar al último invitado 
//Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. 
// El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista. 
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
let eliminado = invitados.pop();    // Elimina el último invitado   
console.log(`El invitado eliminado es: ${eliminado}`); // Muestra quién fue eliminado
console.log(`Lista actualizada de invitados: ${invitados}`); 

