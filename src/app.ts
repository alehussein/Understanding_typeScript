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

// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Ale");
textStorage.addItem("Ian");
textStorage.addItem("Monte");
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(41);
numberStorage.addItem(11);
numberStorage.addItem(76);
console.log(numberStorage.getItem());

/// utility types

interface CourseGoal {
  title: string;
  description: string;
  completeUnit: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUnit = date;
  return courseGoal as CourseGoal;
  // return { title: title, description: description, completeUnit: date };
}

const anotherNames: Readonly<string[]> = ["Max", "Sports"];
// anotherNames.push("Manu");
// anotherNames.pop()

