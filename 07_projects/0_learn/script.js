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
// syntax -->  setInterval(function, interval, param1, param2, ...);

/*setInterval(()=>{
    console.log("lern setInterval")
},1000)

//Other way 
function Interval(){
    console.log('using function refernce');
} 
setInterval(Interval, 2000)

//otherway set intervals 
const repeatText= ()=>{
    console.log("using arrow functions");
}
setInterval(repeatText, 3000);

// let do this passing the valuw in functions
const changeContinuos = (text)=>{
    console.log(`Say Good Morning Every Minuts  ${text}`)
}
const stopIn =setInterval(changeContinuos, 1000, "Prince")

// how to stop the interval 
// assing setInterval in variable and pass inside the clearInterval
 clearInterval(stopIn);
 */


// lets halndle with wab page 

// document.addEventListener('DOMContentLoaded',function(){ // this line load DOM before script code run

//  const repeatText = ()=>{
//     const txt =  document.querySelector('h1').innerHTML = "Learning Set Interval"
//      console.log(txt)
//   }
//   const stopIt = setInterval(repeatText, 1000);

//  document.querySelector('#stop').addEventListener('click',function(){
//      clearInterval(stopIt);
//      console.log('Stopped....');
//  });
//  document.querySelector('#start').addEventListener('click', ()=>{
//     setInterval(repeatText, 1000)
//  });
// })


// above code have a little issue when we click on stop and start again then 
// when we want to stop it stop one time and start again without clicking start button
// lets Resolve this problems


document.addEventListener('DOMContentLoaded', () => {
    let intervalValue = null;

    const repeatTxt = () => {
        const text = document.querySelector('h1').innerHTML = 'Learning Js Continuosly';
        console.log(text);
        
    }
//this  function start the interval continue if interval value is 0;    
    function startInterval() {
        if (intervalValue === null) {
            intervalValue = setInterval(repeatTxt, 1000)
            console.log('Started.....');
        }
    }
// this function stop the interval and reassign the interval 0 so start again     
    function stopInterval() {
        if (intervalValue !== null) {
            clearInterval(intervalValue)
            intervalValue = null;  // reset the value after stopping
            console.log("stopped.....");   
        }
    }

    document.querySelector('#start').addEventListener('click', startInterval);

    document.querySelector('#stop').addEventListener('click', stopInterval)
})




