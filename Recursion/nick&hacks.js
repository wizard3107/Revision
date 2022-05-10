const hack = (n,k)=>{
    // console.log("n,k",n,k)
    if(n===k)
    {
        return true
    }
    if(n>k)
    {
        return false
    }
    else {
        // console.log("kbdjbhc")
        return hack(n*10,k)||hack(n*20,k)
    }
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let t=+input[0]
for(let i=1;i<=t;i++)
{
    let k = +input[i]
    console.log(hack(1,k))
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5
1
2
10
25
200`);
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