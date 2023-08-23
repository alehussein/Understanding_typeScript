var person = {
    name: 'Ale',
    age: 40,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    address: {
        street: 'Liberty',
        number: 403
    }
};
var favActivities;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
