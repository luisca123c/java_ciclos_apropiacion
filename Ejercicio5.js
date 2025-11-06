// Creamos un for de 0 hasta 8
for (i=0; i < 8; i++)
{
    // Creamos un for de 0 hasta 4
    for (j = 0; j < 4; j++)
    {
        // Preguntamos al usuario si el corredor esta cansado
        let cansancio = prompt(`vuelta ${j+1} ¿El corredor está cansado? (1.si / 2.no)`);
        // Convertimos la respuesta a numero entero
        cansancio = parseInt(cansancio);
        // si la respuesta es si
        if (cansancio === 1)
        {
            // Mostramos una alerta y finalizamos el for (que va de 0 a 4)
            alert("Corredor cansado, finalizan las vueltas")
            break;
        }
    }
}