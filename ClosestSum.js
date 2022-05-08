function closestSum(n,k,arr)
{
    let min_sum=Number.MAX_SAFE_INTEGER,sum;
    for(let f=0;f<n;f++)
    {
        let l=f+1,r=n-1;
        while(l<r)
        {
          sum=arr[l]+arr[r]+arr[f];
          if(Math.abs(k-sum)<Math.abs(k-min_sum))
          {
            min_sum=sum;
          }
          if(sum<k)
          {
            l++;
          }
          else
          r--;
        } 
    }
    if (min_sum === Number.MAX_SAFE_INTEGER)
        console.log(0)
    else
        console.log(min_sum);
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let t= +input[0].trim();
let l=1;
for(let i=0;i<t;i++)
{
    let [n,k]=input[l++].trim().split(" ").map(Number);
    let arr =input[l++].trim().split(" ").map(Number);
    arr.sort((a,b)=>a-b);
    closestSum(n,k,arr);
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`10
15 14
3 7 -1 7 0 2 -2 -3 -3 4 0 -1 -3 1 7
18 1
0 -1 0 0 0 -1 0 1 1 0 0 1 1 0 0 0 -1 0
6 20
-1 1 9 9 -8 2
13 3
11 -5 -8 11 6 -8 -11 7 -2 1 5 -11 -8
7 6
1 -1 2 -3 0 4 1
11 22
-14 14 6 12 -1 -14 -3 14 11 14 -13
2 3
-1 -3
11 7
-5 0 -5 4 -1 0 4 -4 1 4 4
20 7
3 7 13 5 -10 -9 -4 -6 7 8 -5 -4 -3 8 -11 3 0 -10 2 1
2 6
-1 0`);
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