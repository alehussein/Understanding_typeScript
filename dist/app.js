var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = []; // private property only access inside the class
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
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
var accounting = new Department("Accounting");
accounting.addEmployees('Ale');
accounting.addEmployees('Ian');
accounting.describe();
accounting.printEmployeeInfo();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
