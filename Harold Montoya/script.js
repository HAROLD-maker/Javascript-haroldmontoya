// 2. Promedio y aprobación de estudiante
function ejercicio2() {
    let n1 = parseFloat(prompt("Ingrese la primera calificación (1-10):"));
    let n2 = parseFloat(prompt("Ingrese la segunda calificación (1-10):"));
    let n3 = parseFloat(prompt("Ingrese la tercera calificación (1-10):"));
    let promedio = (n1 + n2 + n3) / 3;
    alert(promedio >= 6 ? `Aprobado con ${promedio.toFixed(2)}` : `Reprobado con ${promedio.toFixed(2)}`);
}

// 4. Ordenar dos números en forma ascendente
function ejercicio4() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    alert(`Números ordenados: ${[a, b].sort((x, y) => x - y).join(", ")}`);
}

// 6. Día de la semana
function ejercicio6() {
    let num = parseInt(prompt("Ingrese un número entre 1 y 7:"));
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    alert(num >= 1 && num <= 7 ? dias[num - 1] : "Número fuera de rango");
}

// 8. Cálculo de salario semanal
function ejercicio8() {
    let horas = parseFloat(prompt("Ingrese las horas trabajadas en la semana:"));
    let salario = horas > 40 ? horas * 20000 : horas * 16000;
    alert(`Salario semanal: $${salario}`);
}

// 10. Descuento en camisas
function ejercicio10() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de camisas:"));
    let precio = parseFloat(prompt("Ingrese el precio unitario:"));
    let descuento = cantidad >= 3 ? 0.2 : 0.1;
    alert(`Total a pagar: $${(cantidad * precio * (1 - descuento)).toFixed(2)}`);
}

// 12. Calculadora básica
function ejercicio12() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (+, -, *, /):");
    let resultado;
    switch (operacion) {
        case '+': resultado = a + b; break;
        case '-': resultado = a - b; break;
        case '*': resultado = a * b; break;
        case '/': resultado = b !== 0 ? a / b : "Error: División por cero"; break;
        default: resultado = "Operación no válida";
    }
    alert(`Resultado: ${resultado}`);
}

// 14. Índice de Masa Corporal (IMC)
function ejercicio14() {
    let peso = parseFloat(prompt("Ingrese su peso en kg:"));
    let altura = parseFloat(prompt("Ingrese su altura en metros:"));
    let imc = peso / (altura * altura);
    let mensaje = imc < 18.5 ? "Bajo peso" : imc < 24.9 ? "Peso normal" : imc < 29.9 ? "Sobrepeso" : "Obesidad";
    alert(`IMC: ${imc.toFixed(2)} - ${mensaje}`);
}

// 16. Criterio de nota final
function ejercicio16() {
    let nota = parseFloat(prompt("Ingrese su nota final:"));
    let criterio;
    if (nota >= 4.5 && nota <= 5.0) {
        criterio = "Desempeño Superior";
    } else if (nota >= 3.9 && nota <= 4.4) {
        criterio = "Desempeño Alto";
    } else if (nota >= 3.4 && nota <= 3.8) {
        criterio = "Desempeño Básico";
    } else if (nota >= 1.0 && nota <= 3.3) {
        criterio = "Desempeño Bajo";
    } else {
        criterio = "Nota fuera de rango";
    }
    alert(`Criterio: ${criterio}`);
}

// 18. Clasificación de número
function ejercicio18() {
    let num = parseFloat(prompt("Ingrese un número:"));
    let mensaje = num < 10 ? "Es un número menor que 10" : num <= 20 ? "Es un número entre 10 y 20" : "Es un número mayor que 20";
    alert(mensaje);
}

// 20. Elegibilidad para el servicio militar
function ejercicio20() {
    let genero = prompt("Ingrese su género (Masculino/Femenino):").toLowerCase();
    let edad = parseInt(prompt("Ingrese su edad:"));
    alert(genero === "masculino" && edad > 18 ? "Elegible para el servicio militar" : "No elegible");
}

// Verificar si un número es positivo, negativo o cero
function verificarNumero() {
    let num = parseFloat(prompt("Ingrese un número:"));
    let mensaje = num > 0 ? "El número es positivo" : num < 0 ? "El número es negativo" : "El número es cero";
    alert(mensaje);
}

// Asignar adulto o menor usando operador ternario
function verificarEdad() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let categoria = edad >= 18 ? "adulto" : "menor";
    alert(`La persona es un ${categoria}.`);
}