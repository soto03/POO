let num1 = prompt("Ingrese el primer numero: ")
let num2 = prompt("Ingrese el segundo numero: ")

function CrecDecre(num1,num2){
    if(num1 > num2){
        console.log("Los numeros estan en orden Decreciente")
    }
    else{
        console.log("Los numeros estan en orden Creciente")
    }
}

CrecDecre(num1,num2)