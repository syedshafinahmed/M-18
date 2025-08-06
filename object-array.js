const numbers = [1, 2, 3, 4, 5];
const players = [{}, {}, {}];
const employees = [
    {name: "Shafin", designation: "Research Assistant", salary: 30000 },
    {name: "Nafin", designation: "Teaching Assistant", salary: 24000 },
    {name: "Anik", designation: "Marketing Manager", salary: 20000 },
    {name: "Archo", designation: " Web Developer", salary: 40000 }
];
console.log(employees[3].salary);

// for of
for(const employee of employees){
    console.log(employee.salary, employee.designation);
}

// variable
for(const employee of employees){
    const emp_salary = employee.salary;
    console.log(emp_salary);
}

// change value
employees[0].name = "Dhruv";
console.log(employees[0].name);