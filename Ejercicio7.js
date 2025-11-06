// Inicializamos la variable suma
let suma = 0;
// creamos un bucle de 1 a 100
for (let i = 1; i <= 100; i++) 
    {
        // si el indicador es mayor que noventa y par
        if (i >90 && i % 2 == 0)
        {
            // rompe el ciclo
            break;
        }
        // si no, se suma solamente
        else{
            suma += i;
        }
    }