// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// lets understand how many ways we can create prototypes
// 1 way to using functions construstors

/*
function person(name, age, city){
    this.name =name
    this.age = age
    this.city = city
}

//here we creae our methods showDetails
person.prototype.showDetails = function(){
    console.log(`Name of person ${this.name} age ${this.age} and city ${this.city}`)
}
const person1 = new person('prince', 24, 'lko')
person1.showDetails()

*/
// second way create element 
/*
const Greeting  = {
    greet(name){
        this.name = name;
        console.log(`Helli ! Mr. ${this.name}`)
    }
}
const person2 = Object.create(Greeting);
person2.greet("prince");

*/


const vehicle ={
    showCarDetails(){
        console.log(`car model ${this.brand}`)
    }
}
function carDetails(name, brand, model){
    this.name= name;
    this.brand = brand;
    this.model =model;
}
Object.assign(carDetails.prototype, vehicle) //Using Object.assign to copy methods to Person.prototype
const car = new carDetails('Nexon', 'TATA', 'BS6')
car.showCarDetails();