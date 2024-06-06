function activar(elemento) {
    console.log("elemento presionado", elemento);
    if(elemento.textContent == 'Apagado'){
        elemento.style.backgroundColor = 'green'; // Cambia el color de fondo del botón
        elemento.textContent = 'Activado'; // Cambia el texto del botón
    }
    else{
        elemento.style.backgroundColor = 'red'; // Cambia el color de fondo del botón
        elemento.textContent = 'Apagado'; // Cambia el texto del botón
    }
    }

