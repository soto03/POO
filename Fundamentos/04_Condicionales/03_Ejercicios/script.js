function inicioSesion(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario")
    let contraseña = prompt("Ahora ingrese su contraseña")

    if(nombreUsuario == "usuario123", contraseña == "secreto"){
        verficacion = ("Acceso concedido")
    }
    else
    {
        verficacion = ("Acceso denegado")
    }
    document.getElementById(`lista`).innerHTML = verficacion
}