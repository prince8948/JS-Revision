// IIFE -> it stand for Immidiatily Invoked  Functions Expression

/* Avoid to pollting globle nameSpace -> Because our application could include many functions and global variables from different source files, 
it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, 
we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function 
declaration or a function expression.

*/
//it called named iife
function printMessage(){ 
    console.log("welcome back to the website")
}
printMessage();
// above functions is a normal function and it is not avoid the globle pollution means (you have a a lots of varible with same name)
//but if we put these function inside the paranthisis so it restrict the globle pollution
//please put the comma after functions otherwise it return the error this is not a function for next function id you are created.
(function printMessage(){
    console.log("welcome back to the our tutorial")
})();


//lets create the arrow functions with IIFE
//its called simple iife
((name) =>{
    console.log(name)
})("Raj Kumar")