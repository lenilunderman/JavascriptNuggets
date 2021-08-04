// Finding Unique values 
// id, name, category
const menu = [
    {
        id:1,
        name:'eggs and ham',
        category:'breakfast'
    },
    {
        id:2,
        name:'beef and potatos',
        category:'dinner'
    },
    {
        id:3,
        name:'pasta and meatballs',
        category:'dinner'
    },
    {
        id:4,
        name:'egg sallad',
        category:'lunch'
    },
    {
        id:5,
        name:'panquekas',
        category:'breakfast'
    },
    {
        id:6,
        name:'pasta with fish',
        category:'dinner'
    },
    {
        id:7,
        name:'toast with eggs',
        category:'breakfast'
    },
    {
        id:8,
        name:'hamburguer',
        category:'dinner'
    },
    {
        id:9,
        name:'tacos tuesday',
        category:'lunch'
    },
]

// finding unique, first iterate, then filter it
// first thing is to make sure I have only unique categories inside an array.
// ES6 New Set () -> returns an obj instead of array, so I need to turn into an array

const categories = ['all',...new Set(menu.map(item => item.category))] 

const unique = document.querySelector('#unique')
unique.innerHTML = categories.map(category => {
    return `<button> ${category}</button>`
}).join(' ')

console.log(categories)
console.table(categories)
