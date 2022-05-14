function sideLane(arr,n){
    let lane = [];
    let ans = [];
    for(let i = 0;i<n;i++){
        while(lane.length!==0&&lane[lane.length-1]<=arr[i])
        {
            ans.push(lane[lane.length-1]);
            lane.pop();
        }
        if(arr[i]<arr[i+1])
        ans.push(arr[i]);
        else
        lane.push(arr[i])
    }
    while(lane.length!==0)
    {
        ans.push(lane[lane.length - 1]);
        lane.pop();
    }
    arr.sort(function (a,b){
        return a-b;
    })
    if(arr.join(" ")===ans.join(" "))
    {
        return "yes"
    }
    else return "no"
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let i = 0;
while(input[i]!=='0')
{
    let n = +input[i++].trim();
    let arr =input[i++].trim().split(" ").map(Number);
    console.log(sideLane(arr,n));
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5
5 1 2 4 3 
0`);
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