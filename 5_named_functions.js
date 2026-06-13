

//Create a funcction to split the string by a delimiter
function splitString(str, delimiter) {
    return str.split(delimiter);
}

//Create a function to print salary of employee from array
function showMeRealSalary(employees, empName){
    for (let i=0; i<employees.length; i++){
        if(employees[i].name === empName){
            console.log("The salary of " + empName + " is: " + employees[i].salary);
            return;
        }
    }
}

//class variable in js
this.tax = 100;

//Increase salary of employees by a certain percentage
function increaseSalary(employees, percentage){
    for (let i=0; i<employees.length; i++){
        employees[i].salary += employees[i].salary * (percentage / 100);
    }
}

//Syntax 2 for function = function is creted as a variable
var increaseSalaryV2 = function increaseSalary(employees, percentage){
    for (let i=0; i<employees.length; i++){
        employees[i].salary += employees[i].salary * (percentage / 100);
    }
}

//Syntax 3 for function = arrow function - very important in modern JS / CAPM
//Note: arrow functions do not have their own 'this', they inherit 'this' from the parent scope
var increaseSalaryV3 = (employees, percentage) => {
    var total = 0;
    for (let i=0; i<employees.length; i++){
        employees[i].salary += employees[i].salary * (percentage / 100) + this.tax;
        total += employees[i].salary;
    }
    console.log("The total salary of all the employees is: " + total);
}


var employees = [
    {name: 'Aditya Chopra', salary: 1000000},
    {name: 'Bhaskar Sharma', salary: 1500000},
    {name: 'Chetan Verma', salary: 2000000},
];

showMeRealSalary(employees, 'Bhaskar Sharma'); //Output: The salary of Bhaskar Sharma is 1500000
console.log("Before Salary Increase:");
console.log(employees);
increaseSalaryV3(employees, 10); //Increases salaries of all employees by 10%
console.log("After Salary Increase:");
console.log(employees);

//map function - calculate the total salary of all employees
// a map function creates a new array by applying a function to each element of the original array
//Map function concept
console.log("Salary array: ");
for (let i=0; i<employees.length; i++){
    console.log(employees[i].salary);
}
//reduce function - calculate the sum of all salaries
//Reduce function concept
var salariesTotal = 0;
for(let i=0; i<employees.length; i++){
    salariesTotal += employees[i].salary;
}
console.log("The total salaries of all employees: " + salariesTotal);