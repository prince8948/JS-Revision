// we leran about getter setter how work and how itwil used in js
// Getter -> it allow us to  define a function to access object properties and it does not take any arguments
//Setter -> it allow us to  define a function to modify object properties and it takes  arguments


//first we create getter setter with class 
class User{
    constructor(name, email){
        this.name = name
        this.email=email
    }
    //now we create getter to access its property name and email
    get name(){
        return this._name.toUpperCase(); //_name is private property convention
    }
    //now create setter 
    set name(str){
         this._name = str;
    }

    // now creat getter setter for email
    get email(){
        return this._email.toLowerCase()
    }
    set email(val){
        this._email=val;
    }
}
const user1 = new User('prince', 'prince@p.com')
// console.log(user1.name); //OR
// console.log(`my name is ${user1.name} and email - ${user1.email}`);


//now create getter setter using function and defineproperty()
function userDetails(userName, userCity){
    this._userName = userName
    this._userCity = userCity

    // here we create the getter setter using define property
    Object.defineProperty(this,'userName',{
        get:function(){
            return this._userName.toLowerCase();
        },
        set:function(name){
            this._userName = name;
        }
    })
}
const person = new userDetails('RAJ', 'Lucknow')
console.log(person.userName);
