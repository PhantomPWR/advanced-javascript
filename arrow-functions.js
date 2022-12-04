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

// === CHALLENGE ===
// Get average marks

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allResultsInSubject = 0
    let resultCount = 0
    let oneResultInSubject

    for (let i in arr) {
        const studentObject = arr[i]
        const resultObject = studentObject["results"]
        if (subject in resultObject) {
            oneResultInSubject = resultObject[subject]
            allResultsInSubject += parseInt(oneResultInSubject)
            resultCount += 1
        }
    }

    return allResultsInSubject / resultCount
};
let averageMarks = averagePoints(students, "science");
console.log(averageMarks)

// === MODEL ANSWER ===
/*
const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);
*/