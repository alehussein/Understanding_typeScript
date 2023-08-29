var _a;
var e1 = {
    name: "Ale",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    return n1.toString() + n2.toString();
}
function printEmployeeInfo(emp) {
    console.log("Name: ", emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: ", emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("StartDate: ", emp.startDate);
    }
}
printEmployeeInfo(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving ...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading cargo " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
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
var userInputElement = document.getElementById("user-input"); ///! as HTMLInputElement;
if (userInputElement) {
    userInputElement.value = "Hi There!";
}
var errorBag = {
    email: "Not a valid Email!",
    userName: "Must start with a capital character!",
};
function addOne(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = addOne("Monte", "Ale");
result.split(" ");
var fetchUserData = {
    id: "m1",
    name: "ale",
    job: { title: "CEO", description: "My own Company" },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = undefined;
var storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
