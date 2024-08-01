

let nombre = prompt("Escribe Tu Nombre: ")
let apellido = prompt("Escribe Tu Apellido: ")
let edad = prompt("Escribe tu Edad")

function MostrarDatos(nombre,apellido,edad){
    console.log(`El nombre completos es ${nombre}, Apellido: ${apellido}`)
    console.log(`La edad es: ${edad}`)
}

MostrarDatos(nombre,apellido,edad);