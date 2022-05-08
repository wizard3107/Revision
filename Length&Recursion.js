const length = (i,str)=>{
    if(str[i]===undefined)
    {
        return i;
    }
    else
    {
        return length(i+1,str);
    }
}
function runProgram(input) {
  // Write code here
let str =input.trim();
 console.log(length(0,str));
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