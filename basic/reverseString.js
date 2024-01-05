const originalString = "I am Arif khan, I am a dedicated front-end web developer";

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

const reversedString = reverseString(originalString);
console.log(reversedString);