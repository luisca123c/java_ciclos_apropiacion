for (i=0; i < 8; i++)
{
    for (j = 0; j < 4; j++)
    {
        let cansancio = prompt(`vuelta ${j+1} ¿El corredor está cansado? (1.si / 2.no)`);
        cansancio = parseInt(cansancio);
        if (cansancio === 1)
        {
            alert("Corredor cansado, finalizan las vueltas")
        }
    }
}