// // This is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // Just a console log for ourselves
// console.log(sum(7,3))

// // Export the function to be used on other files 
// // (similar to the keyword "export" when using webpack)
// module.exports = { sum };
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar / 1.07 * 156.5
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen / 156.5 * 0.87
    return valueInPound;
}
console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(3.5));
console.log(fromYenToPound(3.5));

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound  };