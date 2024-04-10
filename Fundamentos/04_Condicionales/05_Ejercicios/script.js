console.log("Wlpwpw")
function juego(){
    let puntuacion = prompt("Cual es su puntuacion")
    if(puntuacion >= 90){
        respuesta = ("Excelente")
    }
    else if(puntuacion <= 70, puntuacion >= 89){
        respuesta = ("Buen trabajo")
    }
    else if(puntuacion < 70){
        respuesta = ("Necesitas mejorar")
    }
    document.getElementById(`lista`).innerHTML = respuesta
}