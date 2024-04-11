function verificar(){
    let numeroMayor = parseFloat(prompt("Ingrese el número 1:"));

for (let i = 2; i <= 5; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + i + ":"));
    if (numero > numeroMayor) {
        Mayor = numero;
    }
}
    document.getElementById(`lista`).innerHTML = Mayor
}

