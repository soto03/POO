function contador(element){
    let contador = parseInt(element.getAttribute('data-contador') || '0');
    contador ++;
    element.setAttribute('data-contador', contador);
    element.textContent = 'Click' + contador;
}