console.log(vinculado);

function IdentificarMayorEdad(){
    //identificar si es mayor o menor de Edad
    let edad = prompt("Ingrese su edad: ");

    if(edad >= 18){
        resultado = (`Es Mayor de edad - tiene : <h2>${edad}</h2>`)
    }else{
        resultado = (`Es Menor de edad - tiene : <h2>${edad}</h2>`)
    }
    document.getElementById(`lista`).innerHTML = resultado;