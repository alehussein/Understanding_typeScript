var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = "Max";
var age = 30;
age = 29;
var result;
function add(a, b) {
    result = a + b;
    return result;
}
if (age > 20) {
    var isOld = true;
}
var adding = function (a, b) {
    if (b === void 0) { b = 1; }
    //default Parameters
    return a + b;
};
var printOutput = function (output) {
    return console.log(output);
};
var button = document.querySelector("button");
if (button) {
    button.addEventListener("click", function (event) {
        console.log(event);
    });
}
printOutput(adding(4));
var hobbies = ["sports", "cooking"];
var activeHobbies = ["hiking"];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    name: "ale",
    age: 40,
};
var copiedPerson = __assign({}, person);
console.log(__assign({}, person));
