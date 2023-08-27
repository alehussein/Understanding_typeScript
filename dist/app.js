// type AddFun = (a: number, b: number) => number;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log("Function Add =", add(4, 5));
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.long = 30;
        if (n) {
            this.name = n;
        }
        this.age = a;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log('Hi!');
        }
    };
    return Person;
}());
var user1;
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
