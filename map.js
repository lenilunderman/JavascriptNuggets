// Using the MAP Property
const people = [
   {
    id:1,
    name:'leni',
    age:31,
   },
   {
    id:2,
    name:'camila',
    age:31,
   },
   {
    id:3,
    name:'pedro',
    age:43,
   },
]

// mapping an array of objects and grab all the ages.
const ages = people.map((person) => {
    return person.age
})
//console.table(ages)

// mapping all the names and changing them to UpperCase
const names = people.map(person => {
    const namesUppercase = person.name.toUpperCase()
    return namesUppercase
})
console.table(names)

// Creating a new object from an array
const newPeople = people.map(person => {
    return {
        oldname: person.name,
        oldage: person.age + 100
    }
})
console.table(newPeople)

// Displaying it on the screen
const users = people.map((person) => `<h2> ${person.name} </h2>`)

// Grab the html from the Page and change the Inner Text
const result = document.querySelector('#result')
result.innerHTML = users.join('') // to collect the array in one big string without the separators