function identificarNumero(){
    let x = prompt("ingrese un numero: ");
    let y = prompt("ingrese otro numero: ");
    
    if(x > y){
        resultado = (`<h2>${x} es mayor</h2>`)
    }
    else{
        resultado = (`<h2>${y} es mayor</h2>`)
    }
    document.getElementById(`lista`).innerHTML = resultado
    }