/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log("Vanilla JS Function: " + sum);

// Arrow Function With Parameters
const arrowAddTwoNumbers = (a, b) => {
    return a + b;
}
let sumArrow = arrowAddTwoNumbers(3, 5);
console.log("ES6 Arrow Function: " + sumArrow);

// Single Line Arrow Function With Parameters
// const singleLineAddTwoNumbers = (a, b) => (a + b); //also valid
const singleLineAddTwoNumbers = (a, b) => a + b;
let sumSingleLineAddTwoNumbers = singleLineAddTwoNumbers(3, 5);
console.log("Single Line Arrow Function: " + sumSingleLineAddTwoNumbers);

// Implicit Returns
// One parameter: Doesn't need ()
const saySomething = message => console.log(message);
saySomething("Salve Mundi!");

// No parameters: Add ()
const sayHello = () => console.log('Hello!')
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `
    <p>
    This is
    a
    multiline
    string
    with
    HTML
    </p>
    `
)
console.log(returnMultipleLines())