// Javascript Async Await and Fect
const users = [
    {id:1, name:'john'},
    {id:2, name:'maria'},
    {id:3, name:'paulo'},
    {id:4, name:'susan'},
]

const articles = [
    {userId: 1, articles:['one', 'two', 'three']},
    {userId: 2, articles:['four', 'five']},
    {userId: 3, articles:['six', 'seven', 'eight','nine']},
]
// function with async await to find the user
const getData = async () => {
    try {
        const user = await getUser('john')
        const articles = await getArticles(user.id)
        console.log(articles);
    } catch (error) {
        console.log(error);
    }
}

getData()



// function to get the user
function getUser(name){
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name )

        if(user){
            resolve(user)
        }
        else{
            reject(`No user with the name ${name}`)
        }
    })
}
// function to get the aricles
function getArticles(userId){
    return new Promise((resolve,reject) => {
        const userArticles = articles.find((user) => user.userId === userId)
        if (userArticles){
            return resolve(userArticles.articles)
        }
        else{
            reject(`Wrong ID: ${userId}`)
        }
    })
}