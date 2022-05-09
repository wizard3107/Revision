let map = new Map();
const subsequence = (str,arr,l,h)=>{
    if(l<=h)
    {
        if(!map.has(str))
        {
            map.set(str,1)
        }
    }

    for(let i = l;i<=h;i++)
    {
        subsequence(str+arr[i],arr,i+1,h)
    }
}
function runProgram(input) {
  // Write code here
input=input.trim().split('');
subsequence("",input,0,input.length-1)
console.log(map)

}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`aaabbbcc`);
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