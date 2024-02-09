const person = {
    firstName: 'Johnny',
    lastName: 'Silverhand',
    age: 34
}

person.email = 'j.silverhand@cyberpunk.2077';
delete person.age;

console.log(person);
