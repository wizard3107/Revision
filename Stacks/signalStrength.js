const signalCapacity = (arr, n) => {
    let stack = [];
    let ans = [];

    for (let i = 0; i < n; i++) {
        let count = 1
        while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
            count += ans[stack[stack.length - 1]]
            stack.pop();
        }
        ans[i] = count;
        stack.push(i);
    }
    return ans.join(" ");
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let t = +input[0];
let l =1 ; 
for(let i=0;i<t;i++)
{
    let n = +input[l++]
    let arr = input[l++].trim().split(" ").map(Number);
    console.log(signalCapacity(arr,n))
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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