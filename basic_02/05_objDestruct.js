// In this lecture we learn aboute object destructring, JSON, and APIs

const rectangle = {
    height: 10,
    width:30,
    color:"red",
    radius:4
}

//we used destructuring for easy to access object properties
const {height, width,color, radius } = rectangle;
console.log(color);