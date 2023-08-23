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

let favActivities: string[];

console.log(person.name)

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}