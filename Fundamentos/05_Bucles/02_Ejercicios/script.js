function suma(){
    let contador = 1
    let array = []

    while(contador <= 10){
    array.push(contador)
    contador += 1
    }
    document.getElementById(`lista`).innerHTML = `<h2>Suma del 1 al 10: <br>${array}</h2>`
}
