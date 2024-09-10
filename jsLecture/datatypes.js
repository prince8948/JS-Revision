//  today we revise the data type 
/**
 * there are two type of datatype in javascript 
 *  1. primitive datatypes  -> Number, String, Boolean, Null, Undifined, Symbol, bigInt
 *  primitive data types store in stack memory we can only access the copy of data it will allow to change in original data
    Ex.->
*/
//   let userName = "princeprajapati";
//    newUser = userName;
//    newUser = "rahul";
//   console.log(userName);
//   console.log(newUser);
  
 /*  2.non Primitive datatypes -> array, object, functions
 *     non primitive datatypes stores in heap memory that data we accesse through refences and it will the orinal value
    Ex----->
 */

    let user = {
        email: "prince@sft.com",
        name: "prince",
        age: 24
    }

    let newUser = user;
    console.log(newUser.email)

    newUser.email="raj@gmail.com" // it makes the changes in original data
    console.log(newUser.email)
    












// +++++++++++++++++=its for documentations +++++++++++++++++++++

    // https://262.ecma-international.org/5.1/#sec-11.4.3