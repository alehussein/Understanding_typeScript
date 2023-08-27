var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        // private readonly id: string;       //  readonly what the word say X)
        // public name: string;               // public property can access outside the class
        this.employees = []; // private property only access inside the class
        // this.id = id;
        // this.name = n;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, "IT", id) || this;
        _this.admins = admins;
        return _this;
    }
    ItDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ItDepartment;
}(Department));
var AccountingDpt = /** @class */ (function (_super) {
    __extends(AccountingDpt, _super);
    function AccountingDpt(id, account) {
        var _this = _super.call(this, "Account", id) || this;
        _this.account = account;
        _this.accounts = account;
        _this.lastAccount = account[0];
        return _this;
    }
    Object.defineProperty(AccountingDpt.prototype, "mostRecentAccount", {
        get: function () {
            if (this.lastAccount) {
                return this.lastAccount;
            }
            throw new Error("No Account Found.");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!");
            }
            this.addReports(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDpt.getInstance = function () {
        if (AccountingDpt.instance) {
            return this.instance;
        }
        this.instance = new AccountingDpt('m1', []);
        return this.instance;
    };
    AccountingDpt.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    AccountingDpt.prototype.addEmployee = function (name) {
        if (name === "Ale") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDpt.prototype.addReports = function (text) {
        this.account.push(text);
        this.lastAccount = text;
    };
    AccountingDpt.prototype.getAccounts = function () {
        console.log(this.accounts);
    };
    return AccountingDpt;
}(Department));
var employee1 = Department.createEmployee("Cary");
console.log(employee1, Department.fiscalYear);
var accounting = new ItDepartment("m1", ["Ale"]);
var it = new ItDepartment("m1", ["Ale"]);
// const account = new AccountingDpt("m1", []);
var account = AccountingDpt.getInstance();
account.describe();
account.mostRecentAccount = "Year end Account";
account.addReports("petrol");
console.log(account.mostRecentAccount);
account.addReports("oils");
account.addEmployee("Monte");
account.getAccounts();
account.printEmployeeInfo();
it.addEmployees("Ale");
it.addEmployees("Ian");
it.describe();
it.printEmployeeInfo();
console.log(it);
accounting.addEmployees("Ale");
accounting.addEmployees("Ian");
accounting.describe();
accounting.printEmployeeInfo();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
