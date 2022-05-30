const check = (n,arr)=>{
    let map = new Map();
    for(let i = 0;i<n;i++)
    {
        if(!map.has(arr[i])){
            map.set(arr[i],1)
        }
        else
        {
            map.set(arr[i],map.get(arr[i])+1)
        }
    }
    map.forEach((ele,key)=>{
        if(ele===1)
        {
            console.log( key);
        }
    })
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let t = +input [0].trim()
let  l =1;
for(let i =0;i<t;i++)
{
    let  n = +input[l++].trim();
    let arr = input[l++].trim().split(" ").map(Number);
    check(n,arr);
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
1
5
5
1 2 1 3 2`);
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