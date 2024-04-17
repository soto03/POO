function Verpromedio(){
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
        suma += parseFloat(prompt("Ingrese la calificación " + i + ":"));
        promedio = suma / 5;
    }
    document.getElementById("lista").innerHTML = promedio
}