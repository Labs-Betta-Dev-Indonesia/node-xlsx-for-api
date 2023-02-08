const exportToExcel = require("./helpers/exportToExcel");

const users = [
    {
        id: 0,
        name: 'Peter',
        age: 31
    },
    {
        id: 1,
        name: 'John',
        age: 23
    }
];

const workSheetColumnName = [
    "ID",
    "Name",
    "Age"
]

const workSheetName = 'Users';

const data = users.map(user => {
    return [user.id, user.name, user.age];
});
const file = exportToExcel(data, workSheetColumnName, workSheetName);
console.log(file)
