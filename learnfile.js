const fs=require("fs")
// importing fd from packages

// console.log(fs)
// this is an objects containing several properties

// fs.writeFileSync("createnewfile1.js","Hello new file created")
// synchronous task to create file contains 2 parameters

// fs.writeFile("createnewfile1.js","Hello new file created async", err=> console.log(err))
// Async task of creating a file, 3rd parameter throws an error

// const res=fs.readFileSync("./filethatIwillread.txt", 'utf-8')
// console.log(res)
// learning readfile function , decoding type - "utf-8" to decode string txt file, Sync type returns the result

// fs.readFile("./filethatIwillsread.txt", 'utf-8',(err, res)=>{
//     if(err){
//         console.log("Error is:",err)
//     }
//     else{
//         console.log(res)
//     }
// })
// For asynchronous file read , function does not return a value, it takes 3rd parameter a callback function , first value is an err(if occurs), 2ndvalue is the result

fs.appendFileSync('./filethatIwillread.txt', `\nHey you just added a new line10`)
// modify the file with string value

// fs.cpSync('./filethatIwillread.txt','./newCopiedfile.txt')
// copy from one file to another

// fs.unlinkSync('./newCopiedfile.txt')
// function to delete this file

// console.log(fs.statSync('./newCopiedfile.txt'))
// gives every details about the file, have several propertiez

// fs.mkdirSync('newFolder')
// fs.mkdirSync('newFolder2/innerfolder/innerInside',{recursive:true})
creates folder, folder inside folder