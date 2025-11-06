// Inicializamos las variables banco y retiro
let banco = 0;
let retiro = 0;
// Solicitamos al usuario la cantidad en la cuenta de banco
banco = prompt("Ingrese la cantidad en la cuenta de banco: ");
// Convertimos la cantidad a un número entero
banco = parseInt(banco);
// Iniciamos un ciclo infinito para permitir múltiples retiros
while (true) 
    {
        // Solicitamos la cantidad a retirar
        retiro = prompt("Ingrese la cantidad a retirar: ");
        // Convertimos la cantidad a un número entero
        retiro = parseInt(retiro);
        // Verificamos si hay saldo suficiente para el retiro
        if (banco > retiro)
        {
            // Retiramos la cantidad del banco
            banco -= retiro;
        }
        else
        {
            // Mostramos un mensaje de saldo insuficiente y salimos del ciclo
            alert("Saldo insuficiente, cerrando sistema.");
            break;
        }
    }
