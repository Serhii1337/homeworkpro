let company = {
    sales: [
        { name: 'John', salary: 1000 },
        { name: 'Alice', salary: 600 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 }
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
};

function sumOfSalary(department) {
    
    if (Array.isArray(department)) {
        return department.reduce((sum, emp) => sum + emp.salary, 0);
    } else {
        return Object.values(department).reduce((sum, subDep) => sum + sumOfSalary(subDep), 0);
    }
}

console.log(sumOfSalary(company));