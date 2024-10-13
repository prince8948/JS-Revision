/* Lexical Scope:- JavaScript uses lexical scoping, which means that a variable's scope is determined by 
its location in the source code when the code is written. When a function is called, it references the variables 
that are in the same scope as it was declared, not where the function is called from.
*/
function outer(){
    let userDetailes = 'Hello my name is prince prajapati'
    function inner(){
        userDetailes = 'details are changed'
        console.log(userDetailes)
    }inner()
    console.log(userDetailes);
}outer()