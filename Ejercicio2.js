for(let i=0; i < 5; i++) {
    let carnet = prompt("¿El estudiante trae su carnet? (1.Si / 2.No)");
    carnet = parseInt(carnet);
    if (carnet == 1) 
    {
        alert("El estudiante ingreso al salón")
    }
    else 
    {
        alert("El estudiante no ingreso al salón")
    }
}

