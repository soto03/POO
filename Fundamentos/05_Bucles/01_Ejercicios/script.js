function contador(){
    let contar = 20
    let array = []

    while(contar >= 10){
        array.push(contar)
        contar--
    }
    document.getElementById(`lista`).innerHTML = "numeros de lo 20 al 10"
}