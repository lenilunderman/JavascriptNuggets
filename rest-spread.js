// Rest Operator
// array
const fruits = ["banana","grape","orange"]
const [first, ...restOfFruit] = fruits
console.log(first);
console.log(restOfFruit);

const specifFruit = restOfFruit.find((fruit) =>  fruit === 'orange')
console.log('especif fruit is:', specifFruit);

// objects
const person = {name:'leni', lastName:'lunderman', job:'dev'}
const {name} = person
console.log(name);

const getAverage = (names, ...scores) => {
    console.log(names);
    console.log(scores);
    const avg = scores.reduce((total, acc) => {return total += acc},0)/ scores.length
    console.log(avg);
}
getAverage(person.name, 20,30)

// Spread Operator
const udemy = 'udemy'
const letter = [...udemy] // ['u','d','e','m','y']
const boys = ['pedro','joao', 'marcos']
const girls = ['susan', 'anna']

const bestFriend = 'gene'

