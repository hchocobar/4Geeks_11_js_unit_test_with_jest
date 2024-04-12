// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3));


// Inicio del Ejercicio
let oneEuroIs = {
    "JPY": 127.9,  // japan yen
    "USD": 1.2,  // us dollar
    "GBP": 0.8,  // british pound
}


const fromEuroToYen = function(euros){
    // Convertimos euros a yenes
    let yens = euros * oneEuroIs.JPY;  // Convertimos euros a yenes
    yens = Math.floor(yens * 100) / 100;  // Truncamos a solo dos decimales
    return yens;
}


// Solución 2
const fromEuroToDollar = function(euros){
    let dollars = euros * oneEuroIs.USD;  // Convertimos
    dollars =  Math.floor(dollars  * 100) / 100;  // Solo dejamos centavos
    return dollars;
}


const fromEuroToPound = function(euros){
    let pounds = euros * oneEuroIs.GBP;  // Convetimos
    pounds = Math.floor(pounds * 100) / 100;  // Eliminamos decimales 
    return pounds;
}


// Solución 1
const fromDollarToYen = (dollar) => {
    // 1. Calculamos dollars a euros.
    // Cómo? Convirtimos la ecuación dollars = euros * "cotización de un euro en dólares"
    // despejando para obtener los euros = "cotización de un euro en dólares" / dollars
    let euros = oneEuroIs.USD / dollar;
    euros = Math.floor(euros * 100) / 100;  // Eliminamos decimales
    // 2. Calculamos euros a yens
    let yens = fromEuroToYen(euros);
    return yens;
}


// Solución 3
const fromYenToPound = (yen) => {
    // 1. Calculamos yens a euros, similar a lo realiado en la función fromDollarToYen
    let euros = oneEuroIs.JPY / yen;
    euros = Math.floor(euros * 100) / 100;  // Eliminamos decimales
    // 2. Calculamos euros a pounds
    let pounds = fromEuroToPound(euros);
    return pounds;
}


// Exporta la función para usuarla en otros archivos
// (similar a las palabra clave 'export' cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound };
