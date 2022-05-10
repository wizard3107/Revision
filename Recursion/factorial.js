const factorial = (n)=>{
    if(n===0)
    {
        return 1
    }
    else 
    return n * factorial(n-1);
}
function runProgram(input) {
  // Write code here
input=+input.trim()
    
    // console.log(factorial(input));
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`5`);
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
module.exports = factorial