// making a function that will check a year is leapYear or not


const isLeapYear = (year)=>{
    if((year % 4 ===0) && (year % 100 != 0) || (year % 400 === 0)){
        return `${year} is a leapYear`
    }
    else{
        return `${year} is not a leapYear`
    }
}

const result = isLeapYear(2023);
console.log(result);