function addO(n1: number, n2: number) {
  return n1 + n2;
}

function printResults(num: number) {
  console.log("result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void ) {
  const result = n1 + n2;
  cb(result);
}

printResults(addO(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = addO;
// combineValues = printResult;

console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
  console.log(result)
})