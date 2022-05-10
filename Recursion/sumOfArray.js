const sumofArray = (n,arr)=>{
    if(n<0)
    {
        return 0;
    }
    else return arr[n]+ sumofArray(n-1,arr);
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let t =+input[0];
let l =1;
for(let i =0;i<t;i++)
{
    let  n =+input[l++]
    let arr =input[l++].trim().split(" ").map(Number);
    console.log(sumofArray(n-1,arr));
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`);
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