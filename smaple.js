// function sample (arr,callback){
//     console.log(arr);
//     callback(arr);
// }

// function getLength(arr){
//     console.log("length of Array is : ",arr.length);
// }

// sample([1,2,3,4,5],getLength)

const person = {
    fname: "SARANRAJ",
    lname: "RASU",
    age: 25
};

Object.keys(person).forEach((key) => {
    console.log(key,person[key]);   
});

// const a = ["1", "2", "3", "4"];

// console.log(a.join(""));

// Output: 1234


// function length(){
//     let n = 5;
//     function arrayLength(){
//         console.log(n)
//     };
//     return arrayLength;
// }
// let lengthOfArray = length();
// lengthOfArray();


// const express = require("express");

// let app = express();

// app.get("/",(req,res)=>{
//     res.send("request successfull!!")
// })

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl();