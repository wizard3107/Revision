const fib = (n)=>{
    if(n<0)
    {
        return 0
    }
    if(n===0||n===1)
    {
        return n;
    }
    else 
    return fib(n-1)+fib(n-2)
}
function runProgram(input) {
  // Write code here
input=+input.trim()
fib(input)
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`7`);
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