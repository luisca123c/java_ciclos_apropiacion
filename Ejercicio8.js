// creamos un ciclo de 1 a 5
for (let i =1; i <=5; i++)
{
    // pedimos el nombre de la persona
    let nombre = prompt(`Ingrese en nombre de la persona ${i}`);
    // pedimos la edad de la persona
    let edad= prompt(`Ingrese la edad de ${nombre}`);
    // convertimos edad en numero entero
    edad = parseInt(edad);
    // usamos un ternario para comprobar si la edad es mayor a 18 si lo es imprimimos el nombre de la persona
    let mayorEdad = (edad >= 18) ? alert(`Nombre de la persona ${i}: ${nombre}`) : alert("La persona es menor de edad");
}