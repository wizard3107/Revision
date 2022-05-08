function MooreVoting(n,arr)
{
    let m_i=0,count=1
    for(let i=1;i<n;i++)
    {
        if(arr[i]===arr[m_i])
        {
            count++
        }
        else
        count--
        if(count===0)
        {
            m_i=i
            count=1
        }
    }
    return arr[m_i];
}
function MajorityElement(n,arr){
    let key=MooreVoting(n,arr)
    let count=0
    for(let i=0;i<n;i++)
    {
        if(arr[i]===key)
        {
            count++
        }
    }
    if(count>n/2)
    {
        console.log(1)
    }
    else{
        console.log(-1);
    }

} 
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let t=input[0].trim();
let l=1;
for(let i=0;i<t;i++)
{
    let n=+input[l++].trim();
    let arr=input[l++].trim().split(" ").map(Number);
    MajorityElement(n,arr);
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
6
1 1 1 1 2 3
5
1 1 2 2 3`);
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