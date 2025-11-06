// inicializamos la variable num
let num = 0
// ciclo para solicitar 10 numeros
for(let i = 0 ; i < 10; i++){
    // solicitamos el numero
    num = prompt(`Ingrese el numero ${i+1}: `)
    // convertimos el numero a entero
    num = parseInt (num)
    // verificamos si el numero es mayor a 50
    if (num > 50){
        // mostramos el numero mayor a 50
        console.log(`El numero ${num} es mayor a 50`)
    }
}
