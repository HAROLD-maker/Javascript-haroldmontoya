// 1. Funciones en JavaScript
// Una función es un bloque de código reutilizable que realiza una tarea específica.
// Tipos de funciones:
// - Función declarativa
function saludar(nombre) {
    alert(`Hola, ${nombre}!`);
}
document.getElementById("btnSaludar").addEventListener("click", function() {
    saludar("Harold");
});

// - Función anónima
const despedir = function(nombre) {
    alert(`Adiós, ${nombre}!`);
};
document.getElementById("btnDespedir").addEventListener("click", function() {
    despedir("Harold");
});

// - Función flecha
const sumar = (a, b) => alert(`La suma es: ${a + b}`);
document.getElementById("btnSumar").addEventListener("click", function() {
    sumar(10, 3);
});

// 2. Arreglos en JavaScript
// Un arreglo es una estructura de datos que permite almacenar múltiples valores en una sola variable.
let frutas = ["Manzana", "Mandarina", "Naranja"];
frutas.push("Uva");
document.getElementById("btnFrutas").addEventListener("click", function() {
    alert(`Segunda fruta: ${frutas[1]}`);
});

// 3. Programación Orientada a Objetos (POO) en JavaScript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        alert(`Soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
document.getElementById("btnPersona").addEventListener("click", function() {
    let persona1 = new Persona("Harold", 17);
    persona1.presentarse();
});

// 4. Manejo de Eventos y el DOM
// Evento de clic
document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Botón clickeado!");
});

// - Evento de teclado
document.addEventListener("keydown", function(event) {
    alert(`Tecla presionada: ${event.key}`);
});

// - Evento de carga del documento
document.addEventListener("DOMContentLoaded", function() {
    alert("Documento completamente cargado");
});

// 6. Programación Asíncrona en JavaScript
async function obtenerDatos() {
    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let datos = await respuesta.json();
        alert(JSON.stringify(datos));
    } catch (error) {
        alert("Error al obtener datos");
    }
}
document.getElementById("btnDatos").addEventListener("click", obtenerDatos);
