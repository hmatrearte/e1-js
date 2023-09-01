
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. //
function numeroParImpar (numero) {
    if (numero % 2 === 0) {
    console.log("El número " + numero + " es par bro")
    } else {
    console.log("El número " + numero + " es impar bro")
    }
}

numeroParImpar(3);


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function numMayorYmenor(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2 + "pa");
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1 + " bro");
    } else {
        console.log(num1 + " y " + num2 + " son iguales man.");
    }
}

numMayorYmenor(3,9);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function numMultiploDe5(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " sisi, es múltiplo de 5.");
    } else {
        console.log("Negativo base, " + numero + " no es múltiplo de 5.");
    }
}

numMultiploDe5(17);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function todosLosNumeros(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

todosLosNumeros(6);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabraLoca(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

palabraLoca("Naranjas", 5);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function ledZeppelin(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

ledZeppelin(["Jimmy Page", "Robert Plant", "John Paul Jones", "El unico e inigualable John Bonham"]);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function todosMenosElQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}

todosMenosElQuinto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   // 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function ArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    }
}

ArrayPorNumero([1, 2, 3], 2);

