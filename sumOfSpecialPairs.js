function isPrime(a){
    let count=0
    for(let i=1;i<a;i++)
    {
        if(a%i===0)
        {
            count++
        }
    }
    if(count===1)
    return true
    else
    return false
}
function sumOfSpecialPairs(n,arr){
    //write code here
    let sum =0;
    for (let i=0;i<n;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(i<j&&isPrime(j-i))
            {
                sum+= Math.abs(arr[j]-arr[i])
            }
        }
    }
    console.log(sum);
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let n= +input[0].trim();
let arr = input[1].trim().split(" ").map(Number);
sumOfSpecialPairs(n,arr);
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`6
1 2 3 5 7 12`);
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