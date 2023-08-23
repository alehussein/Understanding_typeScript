function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("result: " + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
