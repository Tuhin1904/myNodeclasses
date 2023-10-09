console.log("Hello World")

// const math=require("./mathfunctions")
// console.log(math)
// // math is imported as object
// console.log(math.multiply(19,2))

const {add, multiply}=require('./mathfunctions')
console.log(add(10,5))