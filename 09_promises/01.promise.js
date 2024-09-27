//How to create Promises and get values of result
//promises take a functions in side the function we pass resolve and reject 
// const promiseOne = new Promise(function(resolve, reject){ // create promise using new keyword
//     setTimeout(() => {                                    //after 1s return message
//         console.log("This is my first promises");
//         resolve();                                        // resoleve call that direct refer to the then functions
//     }, 1000);
// })
// promiseOne.then(function(){                               // if resolve come then this print the message 
//     console.log("reponse return succes fully");
// });


// let create second promises 'you can also create the promise like this below code'
// new Promise(function(resoleve, reject){
//     setTimeout(() => {
//         console.log("this second task");
//         resoleve();
//     }, 1000);
// }).then(function(){
//     console.log("second task consumed");
    
// })

//how to  used resolve and how it will work

// const promiseGreet = new Promise(function(resoleve, reject){
//     setTimeout(() => {
//         resoleve({username:'Prince', city:'Lucknow'});
//     }, 1000);
// })
// promiseGreet.then(function(user){
//     console.log(user)
//     console.log("User Name is ->  ",user.username);
//     console.log("User City Name -> ",user.city)
// })


//lets understand how to used resolve and reject in promises

new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:'Prince', city:'Lucknow', loggedIn:true})
        }
        else{
            reject("something went wrong....?")
        }
    }, 1000);
}).then(function(user){
    console.log(user);
}).catch(function(error){
    console.log("Error: ", error)
})

//How to used promises with async and await keyword or methods
const promiseAsync = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:'Raj', city:'Lucknow', loggedIn:false})
        }
        else{
            reject("something went wrong....?")
        }
    }, 1000);
});
async function consumePromise() {
    try {
        let response = await promiseAsync;
        console.log(response);   
    } catch (error) {
        console.log(error);
    }
}consumePromise()


//lets again create asyn /await promises

const asyncAccess = new Promise(function(resoleve, reject){
    setTimeout(() => {
        let userLoggedIn = true;
        if(userLoggedIn){
            resoleve('you can access my page');
        } 
        else{
            reject("can't access something went wrong");
        }
    }, 1000);
})

async function accessPage(){
    try {
        let response = await asyncAccess;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}accessPage();