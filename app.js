// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3));

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = Math.floor(valueInEuro * 1.28 * 100) / 100;
    // retornamos el valor
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro){
    // convertimos el valor a yenes
    let valueInYen = Math.floor(valueInEuro * 127.9 * 100) / 100;
    // retornamos el valor
    return valueInYen;
}

const fromEuroToPound = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInPound = Math.floor(valueInEuro * 0.8 * 100) / 100;
    // retornamos el valor
    return valueInPound;
}
// exporta la función para usuarla en otros archivos
// (similar a las palabra clave 'export' cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound };