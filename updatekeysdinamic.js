// create an object to be updated
const state = {
    loading:true,
    name: '',
    jobTitle: ''
}

// update the value dinamic using function
// the function expect a key, value pair ... you can do that with [] notation

function updateValue(key,value){
    state[key] = value
}

updateValue('name','leni')
console.log(state);