// Ejercicio 7: Filtra nombres que empiecen con la letra 'A' 
//Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.
let nombres = ['Ana', 'Luis', 'Andrea', 'María'];
let nombresConA = nombres.filter(function(nombre) {
    return nombre.startsWith('A'); // Filtra los nombres que empiezan con 'A'
});
console.log(nombresConA); // Muestra la lista de nombres que empiezan con 'A'
// Resultado esperado:
// ['Ana', 'Andrea']