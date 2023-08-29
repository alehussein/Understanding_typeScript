//Generics
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = [];
// names[0].split(' ');
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("this is done!");
    }, 2000);
});
promise.then(function (data) {
    data.split(" ");
});
//Own generics Function
function merge(objA, objB) {
    return Object.assign({ objA: objA }, objB);
}
var mergeObject = merge({ name: "Ale", hobbies: ["sports"] }, { age: 41 });
console.log(mergeObject);
// Constrains
function anotherMerge(objA, objB) {
    return Object.assign(objA, objB);
}
var anotherMergeObject = merge({ name: "Ian", hobbies: ["games"] }, { age: 11 });
console.log(anotherMergeObject);
function countAndPrint(element) {
    var descriptionText = "Go no value";
    if (element.length === 0) {
        descriptionText = "Got 1 elements.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndPrint(["cooking", "sport"]));
// keyof constrains
function extractAndConvert(obj, key) {
    return "value: " + obj[key];
}
console.log(extractAndConvert({ name: "ALE" }, "name"));
// Generic Classes
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItem = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Ale");
textStorage.addItem("Ian");
textStorage.addItem("Monte");
console.log(textStorage.getItem());
var numberStorage = new DataStorage();
numberStorage.addItem(41);
numberStorage.addItem(11);
numberStorage.addItem(76);
console.log(numberStorage.getItem());
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUnit = date;
    return courseGoal;
    // return { title: title, description: description, completeUnit: date };
}
var anotherNames = ["Max", "Sports"];
// anotherNames.push("Manu");
// anotherNames.pop()
