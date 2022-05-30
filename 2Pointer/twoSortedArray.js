const countCommon = (n,arr1,arr2)=>{
    let a = 0,d= n-1,count=0;
    while(a<n&&d>=0){
        if(arr1[a]===arr2[d])
        {
            count++;
            a++;
            d--;
        }
        else if(arr1[a]>arr2[d]){
            d--;
        }
        else
            a++;
    }
    return count;
}

function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let  t = +input[0].trim();
let l = 1;
for(let i = 0;i<t;i++)
{
    let n = +input[l++].trim();
    let arr1 = input[l++].trim().split(" ").map(Number);
    let arr2 = input[l++].trim().split(" ").map(Number);
    console.log(countCommon(n,arr1,arr2));
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`1
6
1 2 2 3 4 5
5 4 3 2 1 1`);
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