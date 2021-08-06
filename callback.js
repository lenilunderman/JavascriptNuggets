// Callback Functions - Invoke a function via reference as argument
function upperCaseName(value){
    console.log(value.toUpperCase());
}
upperCaseName('leni')

// function to reverse a string
function reverseString(value){
    console.log(value.split('').reverse().join(''));
}

// Now callback function
function fullName(name, cb){
    const fullN = `The full name is ${name} lunderman`
    cb(fullN)
}

fullName('leni', upperCaseName)
fullName('leni', reverseString)