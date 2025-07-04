 //Ejercicio 7: Verificar si una lista contiene un elemento 
 // Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]
 //  Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.
let comidas = ["Pizza", "Hamburguesa", "Tacos"];
let contieneSushi = comidas.includes("Sushi"); // Verifica si "Sushi" está en la lista
if (contieneSushi) {
    console.log("La lista contiene Sushi."); // Mensaje si está
}
else {
    console.log("La lista no contiene Sushi."); // Mensaje si no está
}
// Resultado esperado:
// La lista no contiene Sushi.
// La lista contiene Sushi.