let num = 0
for(let i = 0 ; i < 10; i++){
    num = prompt(`Ingrese el numero ${i+1}: `)
    num = parseInt (num)
    if (num > 50){
        console.log(`El numero ${num} es mayor a 50`)
    }
}