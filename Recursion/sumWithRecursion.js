const absSum = (n,arr,i)=>{

    if(i===n-1)
    {
        return 0
    }
    else
    
    {
        let sum = Math.abs(arr[i]-arr[i+1])
        return sum+absSum(n,arr,i+1)
    }
}

function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let  t= +input[0]
let l =1;
for(let i =0 ;i<t;i++)
{
    let n = +input[l++]
    let arr =input[l++].trim().split(" ").map(Number);
    console.log(absSum(n,arr,0,0));
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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