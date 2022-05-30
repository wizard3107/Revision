const equilibirium = (n,arr)=>{
    let sum = 0;
    for(let i= 0 ;i<n;i++)
    {
        sum+=arr[i]
    }
    let lsum = 0;
    let rsum = sum;
    for(let i=0;i<n;i++)
    {
        if(i>0)
        lsum+=arr[i-1]
        rsum =rsum-arr[i];
        if(lsum===rsum)
        {
            return i+1
        }
    }
    return -1;

}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let n = +input[0];
let arr = input[1].split(" ").map(Number);
console.log(equilibirium(n,arr))
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5
-3 -4 5 2 -6`);
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