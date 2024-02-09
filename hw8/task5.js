const users = [
    {
        id: 1,
        name: 'John',
        age: 18
    },
    {
        id: 2,
        name: 'Chris',
        age: 25
    },
    {
        id: 3,
        name: 'Alex',
        age: 31
    },
]

for (const {id, name, age} of users) {
    console.log(`User ${name} has ID:${id} and they are ${age} years old`);
}
