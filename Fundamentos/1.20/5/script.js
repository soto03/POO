

function NumNaturales() {
let N = parseInt(prompt("Ingrese la cantidad de numeros naturales: "), 10);
let suma = (N * (N + 1)) / 2;

console.log(`La suma de los numeros naturales es ${suma}.`);
}

NumNaturales()