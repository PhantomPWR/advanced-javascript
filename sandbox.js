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

let numberOfStudents = students.length;

for (let i = 0; i < numberOfStudents; i++) {
    let results = (students[i].results['english']);
    let numResults = results.length;
    console.log("numResults: ");
    console.log(numResults);
    for (let i = 0; i < numResults; i++) {
        console.log(numResults[i])
    }
}

const averagePoints = (arr, subject) => {
    return (arr, subject);
}
let averageMarks = averagePoints(students['maths']);
console.log(averageMarks)
