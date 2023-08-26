const userName: string = "Max";
let ages: number = 30;

ages = 29;
let result: number;

function add(a: number, b: number) {
  result = a + b;
  return result;
}

if (ages > 20) {
  var isOld: boolean = true;
}

const adding = (a: number, b: number = 1) => {
  //default Parameters
  return a + b;
};

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

printOutput(adding(4));

const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);

const person = {
  names: "ale",
  age: 40,
};

const copiedPerson = { ...person };

const anotherAdd = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = anotherAdd(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2] = hobbies;
const { names, age } = person;
