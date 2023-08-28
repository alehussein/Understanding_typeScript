// type AddFun = (a: number, b: number) => number;

interface AddFun {
  (a: number, b: number): number;
}

let add: AddFun;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log("Function Add =", add(4, 5));

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Age {
  age: number;
  long: number;
}

interface Greetable extends Named, Age {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;
  long = 30;

  constructor(n: string, a: number) {
    if (n) {
      this.name = n;
    }

    this.age = a;
  }

  greet(phrase: string): void {
    if(this.name){
      console.log(phrase + " " + this.name);
    }else{
      console.log('Hi!')
    }
    
  }
}

let user1: Person;

// user1 = {
//   name: "Ale",
//   age: 41,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person("Ale", 30);

user1.greet("Hi there - I am");

console.log(user1);
