//Generics
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
