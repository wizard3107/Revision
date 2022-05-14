const AandC = (str)=>{
    let stack  =[];
    for(let i = 0;i<str.length;i++)
    {
        if(str[i]==="#")
        {
            stack.pop();
        }
        else
        {
            stack.push(str[i])
        }
    }
    return stack.join("")
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let t = +input[0].trim();
for(let i = 1; i<=t ;i++)
{
    let str = input[i].trim().split("");
    console.log(AandC(str))
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
ab#d
a#bc`);
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