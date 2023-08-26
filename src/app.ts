class Department {
  // private readonly id: string;    // what the word say X)
  // public name: string;               // public property can access outside the class
  protected employees: string[]= [];  // private property only access inside the class
  


  constructor(public  name: string, private readonly id: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
    console.log('Id: ' + this.id);
  }
  addEmployees(employee: string){
    this.employees.push(employee)
  }
  
  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  admins: string[]
constructor(id: string, admins: string[]) {
  super(id, 'IT');
  this.admins = admins;
}
}

class AccountingDpt extends Department {
  accounts: string[]
  constructor(id: string, private account: string[]){
    super(id, 'Account');
    this.accounts = account
  }

  addEmployee(name: string){
      if( name === 'Ale'){
        return; 
      }
      this.employees.push(name)
  }

  addReports(text:string){
    this.account.push(text);
  }

  getAccounts(){
    console.log('Accounts: ' + this.accounts);
  }
}

const accounting = new ItDepartment('m1', ['Ale']);
const it = new ItDepartment('m1', ['Ale']);
const account = new AccountingDpt('m1', []);

account.addReports('petrol');
account.addReports('oils');
account.addEmployee('Monte')
account.getAccounts();
account.printEmployeeInfo();

it.addEmployees('Ale');
it.addEmployees('Ian');
it.describe();
it.printEmployeeInfo();

console.log(it);

accounting.addEmployees('Ale');
accounting.addEmployees('Ian');

accounting.describe();
accounting.printEmployeeInfo();


// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
