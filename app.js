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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var anotherPerson = {
    name: 'Ian',
    age: 11,
    hobbies: ['Games', 'Movies'],
    role: Role.ADMIN,
    address: {
        street: 'Liberty',
        number: 403
    }
};
var favActivities;
console.log(person.name);
console.log(anotherPerson);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (anotherPerson.role === Role.ADMIN) {
    console.log('the role is admin');
}
