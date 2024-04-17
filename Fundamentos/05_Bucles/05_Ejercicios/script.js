function NnumerosPares(){
    let N = parseInt(prompt("Ingrese un numero cualquiera"))
    let count = 0;
    let array = []

    for(let i = 2; count < N; i +=2){
        array.push(i)
        count++;
    }
    document.getElementById(`lista`).innerHTML = `<h2>Estos son la cantidad de numeros pares encontrados: ${array}</h2>`
}
