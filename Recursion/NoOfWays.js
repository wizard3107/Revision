const number_Of_Ways = (n)=>{
    if(n<0)
    {
        return 0
    }
    else if(n===0)
    {
        return 1
    }
    else
    return number_Of_Ways(n-1)+number_Of_Ways(n-2)+number_Of_Ways(n-3)
}
function runProgram(input) {
  // Write code here
input=+input.trim()
let n = input;
console.log(number_Of_Ways(n))
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