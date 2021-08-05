// Filter - Returns a new array based on a condition
// Find - Returns a single instance (object) returns first match, if not match return undefined

const people =[
    {name:'leni', age:31, position:'developer'},
    {name:'pedro', age:39, position:'gamer'},
    {name:'gene', age:65, position:'enginner'},
    {name:'stephen', age:64, position:'chef'},
    {name:'patrick', age:59, position:'retired'}
]

// Filter ...
const findOlder = people.filter((person)=>{
    // if(person.age > 40){
    //     return person
    // }
    return person.age > 60
})
console.log(findOlder);
const findDevelopers = people.filter((person) => person.position === 'developer')
console.log(findDevelopers);

// find - return only a single object instance (for unique values ID's in general)
const fruits = ['banana','grapes','oranges', 'banana']
const findFruit = fruits.find(item => item === 'banana')
console.log(findFruit);