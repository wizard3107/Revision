const  NGE = (n,arr)=>{
   // console.log(n,arr);
    let stack = [];
    let ans = [];
    for(let  i=n-1;i>=0;i--)
    {
        //console.log(stack);
        while(stack.length!==0 && stack[stack.length-1]<arr[i])
        {
           // console.log(stack);
            stack.pop();
        }
        if(stack.length===0)
        {
            ans.push(-1);
        }
        else
        ans.push(stack[stack.length-1])
        
        stack.push(arr[i])
    }
    return ans.reverse().join(" ");
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let  t = input[0].trim();
let l = 1;
    for(let i = 0;i<t;i++)
    {
        let n = +input[l++].trim()
        let arr = input[l++].trim().split(" ").map(Number);
        console.log(NGE(n,arr));
    }

}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`1
4
1 3 2 4`);
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