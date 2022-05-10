/*
The Famous Sum Ended
Description

You are given two numbers nand k. The number p iscreated by concatenating the string n k times.

we need to find thesuper digit ofthe integer p

We definesuperdigit of an integer pusing the following rules:

If p has only 1 digit, then itssuperdigit is 1.
Otherwise, thesuperdigit of p is equal to thesuperdigit of the sum of the digits of p.
Read the Sample input explanation for better understanding.


Input
Input Format

The first line contains two space-separated integers,n-a string representation of an integerand k-an integer, the times to concatenate nto make p.

Constraints

1 <= n <= 10^100000

1 <= k <=10^5


Output
Print thesuperdigit sum p */
const famousSum = (str,n)=>{
    //console.log("str  n",str,n)
    if(n === str.length)
    {
        return 0
    }
    else 
    return +str[n] + famousSum(str,n+1)
}
const superDigit=(n)=>{
  //  console.log("n", n);
    if(n<10)
    {
        return n;
    }
    else 
        n = famousSum(("" + n).split(""), 0);

    return superDigit(n)

}

function runProgram(input) {
  // Write code here
input=input.trim().split(' ')
str = input[0].trim().split("")
k = input[1].trim();
sum=0;
for(let i =0;i<str.length;i++)
{
    sum += +str[i];
}
    n = famousSum(("" + sum).split(""),0)
//console.log("n",n);

console.log(superDigit(n*k));
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`1508 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}