const students = [
    { name: "Аня", grades: [5, 4, 4, 5] },
    { name: "Петя", grades: [3, 4, 4, 3] },
    { name: "Ира", grades: [5, 5, 5, 5] },
];

const avgGrades = students.map(student => {
    let avg = student.grades.reduce((sum, grades) => sum + grades, 0); 
    avg = avg / student.grades.length;
    return { name: student.name, avgGrades: avg}
});

console.log(avgGrades);

const goodAvg = avgGrades.filter(student => student.avgGrades >= 4.5);

console.log(goodAvg);