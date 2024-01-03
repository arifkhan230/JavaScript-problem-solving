// inch to feet
 const getFeet = (inch)=>{
    const feet = inch / 12;
    return feet;
 } 

 const result = getFeet(200);
 console.log(result);

//  miles to kilometer
 const milesToKilo =(miles)=>{
    const kilometer = miles * 1.60934 ;
    return kilometer;
 }

 console.log(milesToKilo(20));

//  kg to gram

const kgToGram = (kg)=>{
    const gram = kg * 1000;
    return gram
}

console.log(kgToGram(10));