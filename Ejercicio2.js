// Iniciamos un ciclo que se repetirá 5 veces
for(let i=0; i < 5; i++) {
    // Preguntamos al usuario si el estudiante trae su carnet
    let carnet = prompt("¿El estudiante trae su carnet? (1.Si / 2.No)");
    // Convertimos la respuesta a un número entero
    carnet = parseInt(carnet);
    // Verificamos si el estudiante trae su carnet
    if (carnet == 1)
    {
        // si lo trae el estudiante ingresa al salón
        alert("El estudiante ingreso al salón")
    }
    else
    {
        // si no lo trae el estudiante no ingresa al salón
        alert("El estudiante no ingreso al salón")
    }
}


