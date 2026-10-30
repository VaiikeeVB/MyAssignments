function checkNumber(Number) {
    let result;
    if (Number > 0) {
        result = "Positive";
    } else if (Number < 0) {
        result = "Negative";
    } else {
        result = "Zero";
    }
    return result;
}
let number = 5;
console.log(checkNumber(number));
