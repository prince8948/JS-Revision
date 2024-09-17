// forIN loops - > for in loops used to etterates the array and objects both it always return the keys of object, index of array,

// how to used in array 
const myArray = [55, 56, 41, 21, 32, 87, 95, 10]
for (const key in myArray) {
    console.log(key) //it retruns index of arra =y values
    // // OR
    console.log(myArray[key]); // it returns the value of keys
    //OR
    console.log(key, ':', myArray[key]);
}





// how to used forin loops with objects 
const programming = {
    js:'javascripts',
    py:'python',
    cpp:'cpp',
    rb:'ruby',
    html:"hyper text markup Lang."
}
for (const key in programming) {
    console.log(key);  // it only returns the keys but 
}

for (const key in programming) {
    console.log(programming[key]);  // it only returns the value of keys 
}
for (const key in programming) {
    console.log(key, ':', programming[key]);  // it only returns the keys but 
}

//object inside array 
const program = [
    {
        langName:'java',
        fileName:'java'
    },
    {
        langName:'javascripts',
        fileName:'js'
    },
    {
        langName:'python',
        fileName:'py'
    },
    {
        langName:'c++',
        fileName:'cpp'
    },
    {
        langName:'hypertext markup lang',
        fileName:'html'
    },
]
for (const key in program) {
    console.log(program[key].fileName)
}
for (const key in program) {
    console.log(`${program[key].langName} extension is ${program[key].fileName}`)
}