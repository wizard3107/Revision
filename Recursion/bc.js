function runProgram(input) {
  // Write code here
input=+input.trim()

const bc = (n,str)=>{
    if(n===1)
    {
        return str=str+"1"
    }
    else
    {
        let r =n%2
        str = str+r
        return bc(Math.floor(n/2),str)
    }
}
console.log( bc(input,"").split("").reverse().join(""))


}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`15`);
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