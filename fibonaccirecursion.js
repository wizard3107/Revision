const fibonacciRecursion=(n)=>{
    if(n<=0)
    {
        return 0;
    }
    else if(n===1)
    {
        return 1;
    }
    else
     return fibonacciRecursion(n-1)+fibonacciRecursion(n-2);
}
function runProgram(input) {
  // Write code here
let n = +input.trim()
console.log(fibonacciRecursion(n));
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`10`);
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