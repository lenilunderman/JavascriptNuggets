async function getUsers(){
    return (await fetch('https://jsonplaceholder.typicode.com/users')).json()
}

document.addEventListener('DOMContentLoaded', async () => {
    let users = []
    try {
        users = await getUsers()
    } catch (error) {
        console.log('Error');
        console.log(error);
    }
    console.log(users);
})


// find - return only a single object instance (for unique values ID's in general)
console.log('the users:', users);
const test = users.find((userId) => userId.id === 1)
console.log('test' , test);
