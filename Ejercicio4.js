let banco = 0;
let retiro = 0;
banco = prompt("Ingrese la cantidad en la cuenta de banco: ");
banco = parseInt(banco);
while (true) 
    {
        retiro = prompt("Ingrese la cantidad a retirar: ");
        retiro = parseInt(retiro);
        if (banco > retiro)
        {
            banco -= retiro;
        }
        else
        {
            alert("Saldo insuficiente, cerrando sistema.");
            break;
        }
    }
