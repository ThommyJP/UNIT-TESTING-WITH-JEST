// this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// just a console log for ourselves.
// console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum }

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * ((1/1.2)*127.9);
    //return the yen value
    return valueInYen;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to Pound
    let fix = valueInYen * ((1/127.9)*0.8);
    let valueInPound = Number(fix.toFixed(2));
    //return the yen value
    return valueInPound;
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
