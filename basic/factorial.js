// checking factorial of a number

const getFactorial = (number) => {
    if (number === 0) {
        return 1
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i
    }
    return factorial
}

const factorial = getFactorial(10);
console.log(factorial);