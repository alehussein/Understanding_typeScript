const person: {
  name: string;
  age: number;
  hobbies: string[];
  role:[number, string];
  address:{
    street: string;
    number: number;
  }
} = {
  name: 'Ale',
  age: 40,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  address: {
    street: 'Liberty',
    number: 403 
    
  }
}

enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

const anotherPerson: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
  address: {
    street: string;
    number: number;
  }
}= {
  name: 'Ian',
  age: 11,
  hobbies: ['Games', 'Movies'],
  role: Role.ADMIN,
  address: {
    street: 'Liberty',
    number: 403 
}
}

let favActivities: string[];

console.log(person.name)
console.log(anotherPerson);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}

if(anotherPerson.role === Role.ADMIN){
  console.log('the role is admin');
}