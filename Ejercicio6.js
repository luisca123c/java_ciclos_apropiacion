// Ejercicio 6: Validación de compra de películas (hasta 15 intentos)
// Este script pide si la película es para adultos y, si lo es,
// solicita la edad del comprador para decidir si permitir la compra.
for (let i = 0; i < 15; i++) {
    // Preguntamos si la película es para adultos: 1 = Sí, 2 = No
    // Guardamos la respuesta en la variable `pelicula` y la convertimos a entero
    let pelicula = prompt("¿La pelicula es para adultos? (1.Si / 2.No)");
    pelicula = parseInt(pelicula, 10);
        // si la respuesta es si
        if (pelicula == 1) 
        {
            // Pedimos la edad del comprador y la convertimos a entero (base 10)
            let edad = prompt("Ingrese la edad del comprador:");
            edad = parseInt(edad, 10);
            //si la edad es menor a 18
            if (edad < 18)
            {
                // mensaje de que no se compro la pelicula y restamos uno al contador
                alert("No se pudo comprar la pelicula, es para mayores.");
                i--;
            }
        }
    }
