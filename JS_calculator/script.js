let num1 = parseFloat(prompt('Введіть перше число'));

let num2 = parseFloat(prompt('Введіть друге число'));

let op = prompt('Оберіть операцію (+, -, *, /):');

if (op === "+") {
    console.log(num1 + num2);
} else if (op === "-") {
    console.log(num1 - num2);
} else if (op === "*") {
    console.log(num1 * num2);
} else if (op === "/") {
    if (num2 === 0) {
        console.log("Error")
    } else {
        console.log(num1 / num2);
    }
} else {
    console.log('Error');
}