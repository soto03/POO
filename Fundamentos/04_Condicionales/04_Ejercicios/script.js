function detect(){
    let numero = prompt("<h2>Ingrese un numero</h2>")
    if(numero <= -1){
        resultado = ("<h2>Es un numero negativo</h2>")
    }
    else if (numero >= 1){
        resultado = ("<h2>Es un numero positvo</h2>")
    }
    else if(numero == 0){
        resultado = ("<h2>Es 0</h2>")
    }
    document.getElementById(`lista`).innerHTML = resultado
}