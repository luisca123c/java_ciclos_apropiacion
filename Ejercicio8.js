let suma =0;
for (let i =1; i <=5; i++)
{
    let nombre = prompt(`Ingrese en nombre de la persona ${i}`);
    let edad= prompt(`Ingrese la edad de ${nombre}`);
    edad = parseInt(edad);
    let mayorEdad = (edad >= 18) ? alert(`Nombre de la persona ${i}: ${nombre}`) : alert("La persona es menor de edad");
}