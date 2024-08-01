let num1 = parseFloat(prompt("Ingrese la primera nota: "))
let num2 = parseFloat(prompt("Ingrese la segunda nota: "))
let num3 = parseFloat(prompt("Ingrese la tercera nota: "))
let num4 = parseFloat(prompt("Ingrese la cuarta nota: "))
let num5 = parseFloat(prompt("Ingrese la quinta nota: "))

function promedio(){
    let sum = num1 + num2 + num3 + num4 + num5
    let prome = sum / 5
    console.log(`El promedio del estudiante es ${prome}.`)
}
promedio(num1,num2,num3,num4,num5)
