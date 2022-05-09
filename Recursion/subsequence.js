const subsequence = (str,arr,l,h)=>{
if(l<=h+1&&str!=="")
{
    console.log(str)
}
for(let i=l;i<=h;i++)
{
    subsequence(str+arr[i],arr,i+1,h)
}

}
function runProgram(input) {
  // Write code here
let arr =input.trim().split('')
subsequence("",arr,0,arr.length-1)
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`abc`);
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