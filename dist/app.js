var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        // private id: string;
        // public name: string;               // public property can access outside the class
        this.employees = []; // private property only access inside the class
        // this.id = id;
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
        console.log('Id: ' + this.id);
    };
    Department.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting", 'm1');
accounting.addEmployees('Ale');
accounting.addEmployees('Ian');
accounting.describe();
accounting.printEmployeeInfo();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
