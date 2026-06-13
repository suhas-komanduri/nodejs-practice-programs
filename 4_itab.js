//create a employee internal table which contains data of many employees
var aEmployees = [
    { 
        "id": 1, 
        "name": "Suhas Komanduri", 
        "position": "ITSM Manager", 
        "smoker": false, 
        "age": 37, 
        "salary": 2300000, 
        "sex": "M"
    },
    { 
        "id": 2, 
        "name": "Ramya B N", 
        "position": "HR Consultant", 
        "smoker": false, 
        "age": 36, 
        "salary": 2500000, 
        "sex": "F"
    },
    { 
        "id": 3, 
        "name": "Harish B N", 
        "position": "SAP Consultant", 
        "smoker": false, 
        "age": 41, 
        "salary": 3000000, 
        "sex": "M"
    },
    { 
        "id": 4, 
        "name": "Ramesh Babu", 
        "position": "Finance Manager", 
        "smoker": false, 
        "age": 65, 
        "salary": 3500000, 
        "sex": "M"
    }
]

// print the salary of "Harish B N"
console.log(aEmployees[2].salary); // Output: 3000000
//Using the loop
for(var i = 0; i < aEmployees.length; i++) {
    console.log(aEmployees[i].name + ' - ' + aEmployees[i].position);
}
for(var i = 0; i < aEmployees.length; i++) {
    if(aEmployees[i].name === "Ramya B N") {
        console.log(aEmployees[i].name + ' - ' + aEmployees[i].position + ' - ' + aEmployees[i].salary);
        break;
    } 
}