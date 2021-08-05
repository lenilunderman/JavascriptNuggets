// Destructuring Object
const leni = {
    name:'leni lunderman',
    age:31,
    location:'South Shore',
    sibilins:{
        sister1: 'lis',
        sister2: 'mara'
    },
    country:'brazil',
}

// destructuring as variables
const firstname = leni.name
const country = leni.country
const irma1 = leni.sibilins.sister1
const irma2 = leni.sibilins.sister2

console.log(firstname, country, irma1, irma2)

// Now with Object destructuring const {values, ...} = obj
const {name, location} = leni
console.log(name,location);

const {...test} = leni
console.log('result is:', test);

// function show full name with destructuring
function fullName(person){
    const {name, age} = person
    console.log(`My name is ${name} and I am ${age} years old`);
}

fullName(leni)
