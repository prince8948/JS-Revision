//forEach Loops -> It calls a provided callbackFn function once for each element in an array in ascending-index order.
// inside the callback function we pass three para meters index, items, arraylist
// and in call back function we can also pass the functions reference


const fruits = ['mango', 'apple', 'banana', 'graps','kivi','orange']
fruits.forEach(function(items){
    // console.log(items)
})
// using arrow funtions 
fruits.forEach((val)=>{
    // console.log("arrow ->",val);
})

// using function reference 
function printFruitName(name){
    // console.log(name);
}
fruits.forEach((printFruitName))


//forEach has three parameters index, items, array list 
fruits.forEach((index,val,arrayList)=>{
    // console.log(index," - ", val, "list - ", arrayList);
})



// how to used forEach with objects ------------------------------------------
const myobj = [{
    IN: 'INDIA',
    AFG: 'AFGANISTAN',
    AUS:'AUSTRALIA',
    USA: 'UNITED STATES OF KINNGDOM',
    CH:'CHINA',
    NZ:'NEWZILAND',
    SL:'SGRILANKA'
}]

myobj.forEach((states)=>{
    // console.log(states);
    // console.log(states.AFG);
})

// create another array with object 
const std = [
    user1 ={
        name:'raj',
        age:'19',
        city:'lko',
        course:'MCA',
        skills:['html','css', 'sql', 'js'],
        isLoggedIn:true
    },    
    user5 ={
        name:'rajesh',
        age:'18',
        city:'bbk',
        course:'MCA',
        skills:['html','java', 'sql', 'js'],
        isLoggedIn:true
    }, 
    user2 ={
        name:'rahul',
        age:'20',
        city:'CNB',
        course:'BCA',
        skills:['java', 'sql', 'js'],
        isLoggedIn:1
    },
    user3 ={
        name:'raja',
        age:'22',
        city:'GD',
        course:'BSc',
        skills:['sql', 'js'],
        isLoggedIn:true
    } ,
    user4 ={
        name:'prince',
        age:'24',
        city:'lko',
        course:'MCA',
        skills:['js'],
        isLoggedIn:false
    }  
]
let arr=[];
std.forEach((stdDetails)=>{
    if(stdDetails.isLoggedIn == true){
        arr = stdDetails.name;
        // if(stdDetails.skills.length>2){
        //     console.log(`${stdDetails.name} : ${stdDetails.course}`)
        // }
        console.log(arr);   
    }
})
console.log(arr.length);

