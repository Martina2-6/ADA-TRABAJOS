// Ejercicio 7: Libros 
//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
// título: una cadena con el título del libro. 
// autor: una cadena con el nombre del autor del libro. 
// anioPublicacion: un número con el año de publicación del libro. 
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.
const prompt = require('prompt-sync')();
// Definición de los objetos libro1 y libro2
const libro1 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967
};
const libro2 = {
    titulo: "El amor en los tiempos del cólera",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1985
};
// Función para mostrar la información de los libros
function mostrarLibro(libros) {
    libros.forEach(libro => {
        console.log(`Título: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
        console.log(`Año de publicación: ${libro.anioPublicacion}`);
        console.log('--------------------------');
    });
}
// Ejemplo de uso
let libros = [libro1, libro2];
mostrarLibro(libros);
