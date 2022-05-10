const length = (str)=>{
    if(str.join("")==="")
    {
        return 0
    }
    else 
    return 1+ length(str.slice(1));
}

function runProgram(input) {
  // Write code here
input=input.trim().split('')
console.log(length(input))
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`masaischool`);
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