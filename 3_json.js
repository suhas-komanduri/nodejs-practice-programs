var oEmp = {
    "empId": 236532,
    "empName": "Suhas Komanduri",
    "empSal": 2300000,
    "empDept": "ITSM",
    "currency": "INR",
    "skills": ["Incident Management", "Problem Management", "Change Management", "Major Incident Management", "ITIL V3.0"],
    "address": {
        "houseNumber": "202, 2nd Floor, SAi Manjunatha Apartments",
        "street": "1st Main Road, Nagendra Block",
        "city": "Bengaluru",
        "state": "Karnataka",
        "zip": "560050"
    }
}

console.log(oEmp); // Print the entire JSON object

// Accessing properties: in ABAP we do: wa-empName
console.log(oEmp.empName); // Output: 'Suhas Komanduri'
console.log(oEmp.skills[2]); // Output: 'Change Management' because index starts with 0
console.log(oEmp.address.city); // Output: 'Bengaluru'

//convert JSON object to string
var sEmp = JSON.stringify(oEmp);
console.log(sEmp); // Output: JSON string
//Convert String back to json
var oEmp2 = JSON.parse(sEmp);
console.log(oEmp2); // Output: JSON object