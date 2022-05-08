function award(n,arr){
    let zero=0,one=0,two=0;
    for(let i=0;i<n;i++)
    {
        if(arr[i]===0)
        {
        zero++;
        }
        else if(arr[i]===1)
        one++;
        else
        two++;
    }
    let z=0,o=0,t=0,ans=[];
    while(z!==zero)
    {
        ans.push(0)
        z++;
    }
    while (o !== one) {
        ans.push(1)
        o++;
    }
    while (t !== two) {
        ans.push(2)
        t++;
    }
    console.log(ans.join(" "));
} 
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let t=+input[0].trim()
let l=1;
for(let i=0;i<t;i++)
{
    let n=+input[l++].trim();
    let arr=input[l++].trim().split(" ").map(Number);
    award(n,arr);
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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