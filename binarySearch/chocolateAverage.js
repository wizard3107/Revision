const avgChocolates= (arr,k)=>{
  console.log('k:',k)
  let  l =0,h=arr.length-1;
  let ans = -1
  let mid 
  while(l<=h){
      mid = l+Math.ceil((h-l)/2)
     // console.log(`l: ${l}, h: ${h}`)
    if(arr[mid]>=k)
    {
      ans=mid
      h=mid-1
    }
    else if(arr[mid]<k)
    {
      l=mid+1;
    }
  } 
  if(ans===-1)
  {
    return arr.length;
  }
  else
  return ans
  
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let n = input[0].trim();
let arr = input[1].trim().split(" ").map(Number);
arr.sort(function(a,b){return a-b});
let avgArr = []
let sum = 0;
for(let i =0;i<n;i++)
{
  sum+=arr[i]
  avgArr.push(Math.floor(sum/(i+1)));
}
console.log(avgArr)
let q= +input[2].trim();
for(let i =0;i<q;i++)
{
  let k = +input[i+3].trim()
  console.log(avgChocolates(avgArr,k))
}
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`93
36 40 44 22 17 45 3 33 48 28 39 18 8 3 37 5 44 33 30 12 42 1 3 46 34 33 33 31 33 39 2 30 39 1 10 2 30 31 42 6 39 1 26 1 43 23 13 22 40 6 38 37 2 41 20 43 28 2 5 36 13 6 38 6 1 43 40 13 45 25 24 49 4 17 34 24 16 40 12 14 28 1 42 18 23 9 25 36 23 11 6 3 21
93
39
43
32
8
6
24
31
47
17
19
16
4
33
29
42
30
41
4
49
40
28
1
8
30
24
47
48
30
20
23
15
23
3
17
17
45
5
14
48
30
6
48
34
28
35
7
32
34
14
7
31
3
46
24
46
15
29
39
20
4
9
10
20
10
31
47
28
1
46
48
37
21
40
45
31
35
39
24
10
18
42
37
27
16
13
48
23
23
4`);
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