function suma(){
    let contador = 0
    let suma = 0
    let array = []
    let sumaStr = ""
    
    while(contador < 10){
        suma += contador
        sumaStr += contador + "+"
        array.push(suma)
        contador++
    }
    suma += contador
    sumaStr += contador + " = " + suma
    document.getElementById(`lista`).innerHTML = `<h2>Suma del 1 al 10: <br>${sumaStr}</h2>`
}
