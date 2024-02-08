const car1 = {
    make: 'Geely',
    model: 'CK',
    year: 2008
};

const car2 = {
    make: 'Daewoo',
    model: 'Lanos',
    owner: 'Not me'
}

const car3 = {
    ...car1,
    ...car2
};

console.log(car3)
