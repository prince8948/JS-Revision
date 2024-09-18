// filter() -> filter is an eterative method which i used to eterates the array element

//Ex -->

const myNums = [12, 13, 14, 15 ,16,17, 18]
const results= myNums.filter(function(nums){
    return nums >14;
})
console.log(results)

//OR with arrow functions
const result2 = myNums.filter((val)=>{
    return val >15
})
console.log("with arrow funtions -> ",result2);

//emplicit way
const result3 = myNums.filter((nums) => (nums>=16));
console.log("implicit way -> ", result3);


// how to pass function referance in filter
function find(val){
    if(val>=17){
        return val
    }
}
const filterFuntionReferance = myNums.filter(find)
console.log(filterFuntionReferance);


//with array object 
const bookStore = [
    {
        title:"book 1",
        genre:"history",
        publish:1994,
        editon:2011,
        author:"acb",
    },
    {
        title:"book 2",
        genre:"history",
        publish:1996,
        editon:2013,
        author:"def",
    },
    {
        title:"book 3",
        genre:"science",
        publish:1965,
        editon:2024,
        author:"xyz",
    },
    {
        title:"book 4",
        genre:"science",
        publish:1994,
        editon:2020,
        author:"acb",
    },
    {
        title:"book 5",
        genre:"fiction",
        publish:1990,
        editon:2019,
        author:"pqr",
    },
    {
        title:"book 6",
        genre:"non fiction",
        publish:1996,
        editon:2015,
        author:"klm",
    },
    {
        title:"book 7",
        genre:"finction",
        publish:1998,
        editon:2022,
        author:"acb",
    },
    {
        title:"book 10",
        genre:"history",
        publish:1965,
        editon:2023,
        author:"acb",
    }
]
//Q1:- searche those books whoes genre is history and published after 1995
const searcheBooks = bookStore.filter((book) => book.genre ==="history" && book.publish >= 1990)
console.log(searcheBooks);


//Q2:- find those books name whose new edition comes after 2001
const searchBookEdition = bookStore.filter( function(books){
    return books.editon>2022; 
})
console.log(searchBookEdition);

const cityName = ['poland', 'holand', 'new zealand','USA', 'India','Afg', 'markland']
const findLand = cityName.filter((city)=>{
    return city.includes("land");
})
console.log(findLand)
console.log(findLand.length)
