function numerosPares(){
    let array = []
    par = 2

    while(par <= 20){
        array.push(par)
        par += 2
    }
    document.getElementById(`lista`).innerHTML = `<h2>Suma de Numeros Pares: <br>${array}</h2>`
}