// Javascript Nuggets - Promises 
// async await 
// pending, rejected, fulfilled

const value = 2

const promise = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 3)
    console.log('random number: ', randomNum);
    if(randomNum === value){
        resolve('You guessed correctly')
    }
    else{
        reject('Wrong number')
    }
})

console.log(promise);