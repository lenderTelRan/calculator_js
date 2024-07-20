let result = prompt("Calculator enter - 1\n" +
    "Factorial enter - 2\n" +
    "Sum of all digits enter - 3");


switch (result) {
    case "1":
        calc();
        break;
    case "2":
        alert(factorial());
        break;
    case "3":
        alert(sumOfDigits());
        break;
}

function calc() {
    let num1 = prompt("Enter a first number");
    let num2 = prompt("Enter a second number");
    let action = prompt("Enter action +, -, *, /");

    switch (action) {
        case "+":
            alert(Number(num1) + Number(num2));
            break;
        case "-":
            alert(Number(num1) - Number(num2));
            break;
        case "*":
            alert(Number(num1) * Number(num2));
            break;
        case "/":
            alert((Number(num1) / Number(num2)).toPrecision(3));
            break
        default:
            alert("incorrect number or action");
    }
}

function factorial() {
    let numFactorial = Number(prompt("factorial of a number: "));
    if (!Number(numFactorial)) {
        return "incorrect data";
    }

    let res = 1;
    for (let i = 1; i <= numFactorial; i++) {
        res *= parseInt(i);
    }
    return res;
}

function sumOfDigits() {
    let number = prompt("Enter at least 2 digits: ");
    let res = 0;
    for (let i = 0; i < number.length; i++) {
        res += parseInt(number.at(i));
    }
    return res;
}