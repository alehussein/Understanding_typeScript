class Department {
  public name: string;               // public property can access outside the class
  private employees: string[]= [];  // private property only access inside the class

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployees(employee: string){
    this.employees.push(employee)
  }
  
  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}


const accounting = new Department("Accounting");

accounting.addEmployees('Ale');
accounting.addEmployees('Ian');

accounting.describe();
accounting.printEmployeeInfo();


// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
