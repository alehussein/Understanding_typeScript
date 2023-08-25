const userName: string = "Max";
let age: number = 30;

age = 29;
let result: number;

function add(a: number, b: number) {
  result = a + b;
  return result;
}

if (age > 20) {
  var isOld: boolean = true;
}



const adding = (a: number, b: number = 1) => {      //default Parameters
  return a + b;
};

const printOutput:(a: number | string) => void = output => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

printOutput(adding(4));
