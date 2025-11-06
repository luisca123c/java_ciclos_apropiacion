for (let i= 0; i  < 15; i++) 
    {
        let = pelicula("¿La pelicula es para adultos? (1.Si / 2.No)");
        pelicula = parseInt(pelicula);
        if (pelicula == 1) 
        {
            let edad = parseInt(prompt("Ingrese la edad del comprador:"));
            edad = parseInt(edad);
            if (edad < 18)
            {
                alert("No se pudo comprar la pelicula, es para mayores.");
            }
        }
    }
