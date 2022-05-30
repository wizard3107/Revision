function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let n = +input[0].trim();
let arr =input[1].trim().split(" ").map(Number);
let count = 1;
for(let i = 1;i<n;i++)
{
    if(arr[i]<arr[i-1])
    {
        count++;
    }
}
console.log(count);
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`6
6 5 4 3 2 1`);
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