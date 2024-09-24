/* const images = document.querySelector('.images')
images.addEventListener('click', function(e){
    let remove = document.querySelector('img');
    remove.remove();
    
})




// OR
// but in this when you click on the list all list(ul) are removed 
document.querySelector('.images').addEventListener('click',function(e){
    let removeIt = e.target.parentNode;
    removeIt.remove();
})


//OR
//it work same as above code
images.addEventListener('click', function(e){
    let removeImg = e.target.parentNode;
    removeImg.parentNode.removeChild(removeImg);
})



//let if you dont want to detele ul list on click li 
// this is the best approach to delete images form unordered list
images.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        let removeImg = e.target.parentNode; 
        removeImg.remove();
    }
})
// above code  used to delete images from list 
*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// setTimeout() in JavaScript is a function used to execute a piece of code or a function after a specified delay (in milliseconds). 
// It runs the code only once after the delay expires.
// setTimeout(function, delay, param1, param2, ...);

/*setTimeout(function(){
    console.log("hi Prince");
}, 1000);

// //OR
function displayName(){
    console.log("This My hobbies..")
}
setTimeout(displayName, 2000);

// //OR
const text = ()=>{
    console.log("Using array functions");
}
setTimeout(text, 3000)

// // function with parameteres
function greet(text){
    console.log(`Good MOrning ${text}`)
}
const stop = setTimeout(greet, 4000, 'Prince Prajapati')

//how to stop this settime  out 
clearTimeout(stop)
*/



//lets handle with webpage

//************************************************************************************ */
//this the way to set tion out on any button or elements
// is below code doesnt work some problem occure like dom is loaded


/*
// if dom loaded properly used this otherwise used second method when dom is not loaded on time

const changeheading = ()=>{
    document.querySelector('#heading').innerHTML = "Learing js settime out";
}
const stopChangeText = setTimeout(changeheading, 2000)


document.querySelector('button').addEventListener('click', function(e){
    clearTimeout(stopChangeText)
})
*/
/*
document.addEventListener('DOMContentLoaded', function(){
    const changeheading = ()=>{
        document.querySelector('#heading').innerHTML = "Learing js settime out";
    }
    const stopChangeText = setTimeout(changeheading, 2000)
    
    
    document.querySelector('button').addEventListener('click', function(e){
        clearTimeout(stopChangeText)
        console.log('stopped.........');
        
    });
});
*/



// *+*+**+*+*+*+*+*++*+*+*+*+*+*+*+*+*+*+*+*9*+*9*+*+*+*+*+**+**+*+*+*+*+*+*+++*+*+*+*+*+*+*+*+-+*-++*-+--+--**

// below we try to under stand how to  set interval work and how to stopped it

// setInterval() in JavaScript is used to repeatedly execute a function or a 
// block of code at specified intervals (in milliseconds)