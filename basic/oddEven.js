// checking a number is even or odd

const checkNumber = (number)=>{
    const remainder = number % 2 ;
    if(remainder === 0){
        return `${number} is even`
    }
    else{
        return `${number} is odd`
    }
}

const result = checkNumber(13);
console.log(result);