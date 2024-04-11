function contadorWhile(){
    let contar = 20
    let array = []

    while(contar >= 10){
        array.push(contar)
        contar--
    }
    document.getElementById(`lista`).innerHTML = `<p>Numeros de 20 al 10 con While: <br>${array}</p>`
}

function contadorFor(){
    let array = []

    for (let i = 20; i >= 10; i--){
        array.push(i)
    }
    document.getElementById(`lista`).innerHTML = `<p>Numeros de 20 al 10 con For: <br>${array}</p>`
}