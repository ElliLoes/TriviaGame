

function myFunction(number) {
    return number * number;
}

var result = myFunction(5);
console.log(myFunction(7));
let result2 = myFunction(7);
console.log(result2);

function add (number2, number3) {
    return number2 + number3;
}

console.log(add(5, 9));
let result4 = add(34, 78);

function multiply (number1, number2) {
    return number1 * number2;
}

let newVar = multiply(6, 9);
let result5 = add (newVar, 3);

// result = (3 + 4) * 7
let result6 = multiply(add(3, 4), 7);