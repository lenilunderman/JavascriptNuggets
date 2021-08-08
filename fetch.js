// Fetch API, 
// Default , get requests, and return promises... 

const url = 'https://jsonplaceholder.typicode.com/users'

//console.log(fetch(url));

// .code()
// fetch(url)
//     .then((res) => res.json()) // still a promise
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// NOW ASYNC AND AWAIT
const getUsers = async() => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

getUsers()

function findUser(){
    getUsers()
    return console.log(data);
    //const user = data.find(item => item.name === name )
    console.log(getUsers());
   
}

findUser()