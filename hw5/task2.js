const isAdult = (age) => {
    if (age >= 18) {
        console.log('Person is adult');
        return true;
    } else {
        console.log('Person is not adult');
        return false;
    }
};

isAdult(25);
isAdult(15);
