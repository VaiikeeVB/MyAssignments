function isOddOrEven(number) {
    let result;
    if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    return result;
}
let number = 7;
console.log (isOddOrEven(number));