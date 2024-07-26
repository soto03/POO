function encontrarNumeros(array){
    let mayor = array[0]

    for(let i = 0; i < array.length; i++){
        if (array[i] > mayor){
            mayor = array[i]
        } 
        else if (array[i] < menor){
            menor = array[i]
        }
    }
    MayorMenor = [mayor, menor]
    return MayorMenor;
}
let resultado = encontrar([3,5,2,6,10])
alert(resultado)