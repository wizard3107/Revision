const findgreatest =(a,b,c)=>{
    if(a>=b&&a>=c){
        
    }
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let t = +input[0]
for(let i =1;i<=t;i++)
{
    let  [a,b,c,n] = input[i].trim().split(" ").map(Number)

    let g = findgreatest(a,b,c);
    while(a<g)
    {
        a++;
        n--;
    }
    while(b<g)
    {
        b++;
        n--;
    }
    while(c<g)
    {
        c++;
        n--;
    }
    if(n>=0&&n%3===0)
    {
        console.log("YES")
    }
    else 
    console.log("NO");

}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`4
5 3 1 9 
100 101 102 105 
10 20 15 14 
101 101 101 3`);
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