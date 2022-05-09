function runProgram(input) {
  // Write code here
input=+input.trim()
let ans= [];
const paranthesis=(s,o,c,n)=>{

    if(s.length===2*n)
    {
        ans.push(s)
        return;
    }
    if(o<n)
    {
        paranthesis(s+"(",o+1,c,n)
    }
    if(o>c)
    {
        paranthesis(s+")",o,c+1,n)
    }
}
paranthesis("",0,0,input)
console.log(ans.length)
console.log(ans.join("\n"))
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