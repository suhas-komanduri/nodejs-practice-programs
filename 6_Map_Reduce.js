var employees = [
    {name: 'Aditya Chopra', salary: 1000000},
    {name: 'Bhaskar Sharma', salary: 1500000},
    {name: 'Chetan Verma', salary: 2000000},
];

//Map function concept
console.log("Salary array: ");
for (let i=0; i<employees.length; i++){
    console.log(employees[i].salary);
}

//Reduce function concept
var salariesTotal = 0;
for(let i=0; i<employees.length; i++){
    salariesTotal += employees[i].salary;
}
console.log("The total salaries of all employees: " + salariesTotal);