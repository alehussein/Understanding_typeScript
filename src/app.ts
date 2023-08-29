//Generics

const names: Array<string> = [];
// names[0].split(' ');
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

//Own generics Function

function merge<T, U>(objA: T, objB: U) {
  return Object.assign({ objA }, objB);
}

const mergeObject = merge({ name: "Ale", hobbies: ["sports"] }, { age: 41 });
console.log(mergeObject);

// Constrains

function anotherMerge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const anotherMergeObject = merge(
  { name: "Ian", hobbies: ["games"] },
  { age: 11 }
);
console.log(anotherMergeObject);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Go no value";
  if (element.length === 0) {
    descriptionText = "Got 1 elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}
console.log(countAndPrint(["cooking", "sport"]));

// keyof constrains

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value: " + obj[key];
}

console.log(extractAndConvert({ name: "ALE" }, "name"));
