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
    return a + b;
};
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector("button");
if (button) {
    button.addEventListener("click", function (event) {
        console.log(event);
    });
}
printOutput(add(4, 2));
