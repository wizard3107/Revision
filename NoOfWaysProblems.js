const noOfWays=(n)=>{
    if(n<0)
    {
        return 0
    }
    else if(n===0)
    {
        return 1;
    }
    else 
    return noOfWays(n-1)+noOfWays(n-2)+noOfWays(n-3)

}
function runProgram(input) {
  // Write code here
let n = +input.trim()
console.log(noOfWays(n));

}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`4`);
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