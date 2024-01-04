const numbers = [12, 13, 14, 21, 19, 55, 56, 88];

const getSumOfAnArray=(numbers)=>{
    let sum = 0;
    for(let i  = 0; i <numbers.length; i++){
        const element = numbers[i]
        sum = sum + element;
    }
    return sum
}

const getOddNumbersOfAnArray = (numbers) => {
    const oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddNumbers.push(element)
        }
    }
    return oddNumbers
}

const oddNumbers= getOddNumbersOfAnArray(numbers);
const totalOddSum = getSumOfAnArray(oddNumbers)

console.log(oddNumbers);
console.log(totalOddSum);