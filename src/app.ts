class Department {
  // private id: string;
  // public name: string;               // public property can access outside the class
  private employees: string[]= [];  // private property only access inside the class

  constructor(public name: string, private id: string) {
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


const accounting = new Department("Accounting", 'm1');

accounting.addEmployees('Ale');
accounting.addEmployees('Ian');

accounting.describe();
accounting.printEmployeeInfo();


// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
