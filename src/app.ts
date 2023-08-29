type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Ale",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  }
  return n1.toString() + n2.toString();
}


type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate: ", emp.startDate);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log("Driving ...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log("loading cargo " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Animal Whit Speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById("user-input"); ///! as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi There!";
}
// userInputElement.value = 'Hi There!';

interface ErrorContainer {    ///{ email: 'not a valid email', ' username: 'Must start with a character! '}
  [prop: string] : string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid Email!',
  userName: 'Must start with a capital character!'
};


function addOne(a:number, b:number): number;
function addOne(a:string, b:string): string;
function addOne(a:number, b:string): string;
function addOne(a:string, b:number): string;

function addOne(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addOne('Monte', 'Ale')
result.split(' ');