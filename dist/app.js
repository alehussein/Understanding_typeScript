var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 41;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
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
user1 = new Person('Ale');
user1.greet("Hi there - I am");
