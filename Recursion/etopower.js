const factorial = (n) => {
    if (n === 0) {
        return 1
    }
    else
        return n * factorial(n - 1);
}
const etoPower =(x,n)=>{
    if(n===0)
    {
        return 1;
    }
    else
    return (1/factorial(n))*(x**n) + etoPower(x,n-1); 

}
function runProgram(input) {
  // Write code here
let [x,n]=input.trim().split(' ').map(Number);
console.log(etoPower(x,n))
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`7 3`);
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