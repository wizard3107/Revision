const isPrime = (n)=>{
    
    for(let i = 2;i<=Math.ceil(n/2);i++)
    {
        if(n%i===0)
        {
            //console.log(n,false)
            return false;
        }
    }
    //console.log(n,true)
    return true;
}
const nonPrimeCheck =(mat,n,m)=>{
    let count = 0;
    for(let  i = 0;i<n;i++)
    {
        for(let j = 0;j<m;j++)
        {
            if(!isPrime(mat[i][j]))
            {
                count++;
            }
        }
    }
    return count;
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let [n,m] = input[0].split(" ").map(Number);
let mat = []
for(let i =1;i<=n;i++)
{
    let temp = input[i].split(" ").map(Number);
    mat.push(temp); 
}
console.log(nonPrimeCheck(mat,n,m));

}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`3 3
1 2 3
4 5 6
7 8 9`);
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