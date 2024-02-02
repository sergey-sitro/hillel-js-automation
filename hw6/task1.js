const handleEven = () => { console.log('Number is even') };
const handleOdd = () => { console.log('Number is odd') };

function handleNum(num, evenFunc, oddFunc) {
    if (num % 2 === 0) {
        evenFunc(num);
    } else if (num % 2 === 1) {
        oddFunc(num);
    }
}

handleNum(13, handleEven, handleOdd);
