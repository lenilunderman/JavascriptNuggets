// Reduce

const staff =[
    {name:'leni', age:31, position:'developer', salary:100},
    {name:'pedro', age:39, position:'gamer',salary:200},
    {name:'gene', age:65, position:'enginner',salary:320},
    {name:'stephen', age:64, position:'chef',salary:500},
    {name:'patrick', age:59, position:'retired',salary:50}
]

// Iterates, reduce to a single value, number, array
// 1st parameter ('acc') total of all calculation
// 2nd parameter ('cur') current iteration/value
const dailyTotal = staff.reduce((total, person)=> {
    total += person.salary
    return total
},0) // zero indicates the initial value

console.log(dailyTotal);