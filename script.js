function iniciarSimulador() {
    const operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division, porcentaje):").toLowerCase();
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado;

    switch (operacion) {
        case "suma":
            resultado = sumar(num1, num2);
            break;
        case "resta":
            resultado = restar(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicar(num1, num2);
            break;
        case "division":
            if (num2 !== 0) {
                resultado = dividir(num1, num2);
            } else {
                alert("No se puede dividir por cero.");
                return;
            }
            break;
        case "porcentaje":
            resultado = calcularPorcentaje(num1, num2);
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert(`El resultado de la ${operacion} es ${resultado}`);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calcularPorcentaje(total, porcentaje) {
    return (total * porcentaje) / 100;
}
