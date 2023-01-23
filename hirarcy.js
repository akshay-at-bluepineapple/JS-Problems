const util = require('util')
let employees =[
    {
        "id": 1002,
        "title": "Principal Architect",
        "first_name": "Josephine",
        "last_name": "Darakjy",
        "manager_id": null,
        "EmployeeLevel": 0
    },
    {
        "id": 1010,
        "title": "Principal Architect",
        "first_name": "Josephine",
        "last_name": "Darakjy",
        "manager_id": null,
        "EmployeeLevel": 0
    },
    {
        "id": 1001,
        "title": "Principal Architect",
        "first_name": "James",
        "last_name": "Vincent",
        "manager_id": 1002,
        "EmployeeLevel": 1
    },
    {
        "id": 1003,
        "title": "Principal Architect",
        "first_name": "Art",
        "last_name": "Venere",
        "manager_id": 1002,
        "EmployeeLevel": 1
    },
    {
        "id": 1004,
        "title": "Cloud Analyst",
        "first_name": "Lenna",
        "last_name": "Paprocki",
        "manager_id": 1002,
        "EmployeeLevel": 1
    },
    {
        "id": 1028,
        "title": "Sr. Cloud Analyst",
        "first_name": "Ezekiel",
        "last_name": "Chui",
        "manager_id": 1002,
        "EmployeeLevel": 1
    },
    {
        "id": 1035,
        "title": "Lead - Talent Acquisition",
        "first_name": "Alishia",
        "last_name": "Sergi",
        "manager_id": 1002,
        "EmployeeLevel": 1
    },
    {
        "id": 1027,
        "title": "Sr. Cloud Analyst",
        "first_name": "Chanel",
        "last_name": "Caudy",
        "manager_id": 1001,
        "EmployeeLevel": 2
    },
    {
        "id": 1029,
        "title": "Cloud Analyst",
        "first_name": "Willow",
        "last_name": "Kusko",
        "manager_id": 1001,
        "EmployeeLevel": 2
    },
    {
        "id": 1030,
        "title": "Cloud Analyst",
        "first_name": "Bernardo",
        "last_name": "Figeroa",
        "manager_id": 1001,
        "EmployeeLevel": 2
    },
    {
        "id": 1034,
        "title": "Sr. Cloud Analyst",
        "first_name": "Albina",
        "last_name": "Glick",
        "manager_id": 1001,
        "EmployeeLevel": 2
    },
    {
        "id": 1040,
        "title": "Cloud Analyst",
        "first_name": "Kati",
        "last_name": "Rulapaugh",
        "manager_id": 1001,
        "EmployeeLevel": 2
    },
    {
        "id": 1041,
        "title": "CTO",
        "first_name": "Youlanda",
        "last_name": "Schemmer",
        "manager_id": 1001,
        "EmployeeLevel": 2
    },
    {
        "id": 1050,
        "title": "Sr. Cloud Analyst",
        "first_name": "Ema",
        "last_name": "Green",
        "manager_id": 1001,
        "EmployeeLevel": 2
    },
    {
        "id": 1011,
        "title": "Sr. Cloud Analyst",
        "first_name": "Minna",
        "last_name": "Amigon",
        "manager_id": 1003,
        "EmployeeLevel": 2
    },
    {
        "id": 1024,
        "title": "Sr. Cloud Analyst",
        "first_name": "Maryann",
        "last_name": "Royster",
        "manager_id": 1003,
        "EmployeeLevel": 2
    },
    {
        "id": 1036,
        "title": "HR Executive",
        "first_name": "Solange",
        "last_name": "Shinko",
        "manager_id": 1003,
        "EmployeeLevel": 2
    },
    {
        "id": 1042,
        "title": "CEO",
        "first_name": "Dyan",
        "last_name": "Oldroyd",
        "manager_id": 1003,
        "EmployeeLevel": 2
    },
    {
        "id": 1012,
        "title": "Cloud Analyst",
        "first_name": "Abel",
        "last_name": "Maclead",
        "manager_id": 1004,
        "EmployeeLevel": 2
    },
    {
        "id": 1025,
        "title": "Sr. Cloud Analyst",
        "first_name": "Alisha",
        "last_name": "Slusarski",
        "manager_id": 1004,
        "EmployeeLevel": 2
    },
    {
        "id": 1007,
        "title": "Cloud Analyst",
        "first_name": "Mitsue",
        "last_name": "Tollner",
        "manager_id": 1011,
        "EmployeeLevel": 3
    },
    {
        "id": 1022,
        "title": "UX Specialist",
        "first_name": "Veronika",
        "last_name": "Inouye",
        "manager_id": 1011,
        "EmployeeLevel": 3
    },
    {
        "id": 1023,
        "title": "Sr. Cloud Analyst",
        "first_name": "Willard",
        "last_name": "Kolmetz",
        "manager_id": 1011,
        "EmployeeLevel": 3
    },
    {
        "id": 1044,
        "title": "Manager",
        "first_name": "Lavera",
        "last_name": "Perin",
        "manager_id": 1011,
        "EmployeeLevel": 3
    },
    {
        "id": 1045,
        "title": "Cloud Analyst",
        "first_name": "Erick",
        "last_name": "Ferencz",
        "manager_id": 1012,
        "EmployeeLevel": 3
    },
    {
        "id": 1013,
        "title": "Cloud Analyst",
        "first_name": "Kiley",
        "last_name": "Caldarera",
        "manager_id": 1007,
        "EmployeeLevel": 4
    },
    {
        "id": 1014,
        "title": "Cloud Analyst",
        "first_name": "Gladys",
        "last_name": "Rim",
        "manager_id": 1007,
        "EmployeeLevel": 4
    },
    {
        "id": 1019,
        "title": "Cloud Analyst",
        "first_name": "Yuki",
        "last_name": "Whobrey",
        "manager_id": 1007,
        "EmployeeLevel": 4
    },
    {
        "id": 1046,
        "title": "Cloud Analyst",
        "first_name": "Fatima",
        "last_name": "Saylors",
        "manager_id": 1044,
        "EmployeeLevel": 4
    },
    {
        "id": 1047,
        "title": "Cloud Analyst",
        "first_name": "Jina",
        "last_name": "Briddick",
        "manager_id": 1044,
        "EmployeeLevel": 4
    },
    {
        "id": 1048,
        "title": "Cloud Analyst",
        "first_name": "Kanisha",
        "last_name": "Waycott",
        "manager_id": 1047,
        "EmployeeLevel": 5
    }
];
//*creating hirarchy formdata
function buildHierarchy(data, manager_id = null) {
    let nodes = {};
    data.forEach(item => {
        let id = item.id;
        nodes[id] = { ...item };
        nodes[id].children = [];
    });
    Object.values(nodes).forEach(node => {
        let manager = nodes[node.manager_id];
        if (manager) {
            manager.children.push(node);
        }
    });
    return Object.values(nodes).filter(node => node.manager_id === manager_id);
}

const data = buildHierarchy(employees)
//console.log(util.inspect(data,false, null, true));


//!finding manager by id

//console.log("\n\n\nfinding manager by id");

// let managerId = 1002;

// let filteredEmployees = employees.filter(employee => employee.manager_id === managerId);

// console.log(util.inspect(filteredEmployees,false, null, true));


//^search employee in hirarchy tree
// function findManagers(employeeId, hierarchy, managers = []) {
//     for (let i = 0; i < hierarchy.length; i++) {
//         let current = hierarchy[i];
//         if (current.id === employeeId) {
//             return managers;
//         }
//         if (current.children) {
//             managers.push(current);
//             let result = findManagers(employeeId, current.children, managers);
//             if (result) {
//                 return result;
//             }
//         }
//     }
//     return null;
// } 


// function findManagers(employeeId, hierarchy) {
//     let managers = [];
//     let current = hierarchy.find(e => e.id === employeeId);
//     while(current && current.id){
//         current = hierarchy.find(e => e.id === current.id);
//         managers.push(current);
//     }
//     return managers;
// }


function findEmployee(employeeId, hierarchy) {

    let employee = hierarchy.id === employeeId?hierarchy:null;
    if (employee) {
        return employee;
    }
    for (let i = 0; i < hierarchy.children.length; i++) {
        console.log("levels===>",hierarchy.children[i].manager_id);
        if (hierarchy[i].children) {
            employee = findEmployee(employeeId, hierarchy[i]);
            if (employee) {
                return employee;
            }
        }
    }
    return null;
}


let employee = findEmployee(1013, data);
console.log(util.inspect(employee,false, null, true));
console.log("=======================================");

console.log(util.inspect(data,false, null, true));
