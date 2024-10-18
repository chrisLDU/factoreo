function calcularFactorial() {
    // Obtener el valor ingresado por el usuario
    let numero = parseInt(document.write('numero').value);
    
    // Validar que el número sea mayor o igual a 0
    if (numero < 0) {
        alert('Por favor ingresa un número no negativo.');
        return;
    }

    if (numero/=$){
        alert("por favor ingrese un numero ")
    }

    let factorial = 1;
    let pasos = ''; // Variable para guardar los pasos de la multiplicación

    // Calcular el factorial y mostrar los pasos
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
        // Mostrar cada paso
        if (i === 1) {
            pasos += i; // El primer número no lleva multiplicación
        } else {
            pasos += ' * ' + i; // Mostrar la multiplicación de cada paso
        }
    }

    // Mostrar el resultado y los pasos
    document.write('resultado').innerHTML = 
        'Pasos: ' + pasos + '<br>El factorial de ' + numero + ' es: ' + factorial;
}
