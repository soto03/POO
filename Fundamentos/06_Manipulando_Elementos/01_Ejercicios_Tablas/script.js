function multTabla(){
    let num = parseInt(document.getElementById("InputText").value)
    let resultado = `la tabla de ${num} es: <br>`;
    for(let i = 1; i <= 10; i++){
        resultado += `<li>${i} X ${num} = ${i}`
    }
    
    

    alert(num);
}