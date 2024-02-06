function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Denominator equals 0!');
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('One of arguments is not a number!');
    }
    return numerator / denominator;
}

try {
    divide(2, 0);
} catch(e) {
    console.log(e);
} finally {
    console.log('Робота завершена');
}

try {
    divide("a", 2);
} catch(e) {
    console.log(e);
} finally {
    console.log('Робота завершена');
}

try {
    divide(2, "a");
} catch(e) {
    console.log(e);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(4, 2));
} catch(e) {
    console.log(e);
} finally {
    console.log('Робота завершена');
}
