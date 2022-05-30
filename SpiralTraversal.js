const traversal = (n,m,arr)=>{
    let ans =[]
    let i, k = 0, l = 0;
    
   while(k<n&&l<m)
   {
       console.log("k,l:",k,l,"n,m:",n,m,ans)
        for(i=k;i<n;i++)
        {
            console.log("k", k, "n", n, ans)
            ans.push(arr[i][k])
        }
        k++;
        for(i=k;i<m;i++)
        {
            console.log("k,l:",k,"n:",n,ans)
            ans.push(arr[n-1][i])
        }
        n--;
        if(k<m){
            for(i=m-k;i>=l;i--)
            {
                ans.push(arr[i][m])
            }
        }
        m--;
        if(l<n)
        {
            for(i=n-l;i>=k;i--)
            {
                ans.push(arr[l][i])
            }
        }
        l++;
   }
    console.log(ans.join(" "));
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let t  = +input[0].trim();
let l = 1 ;
for(let i = 0 ;i<t;i++)
{
    let [n,m]= input[l++].trim().split(" ").map(Number);
   // console.log("n,m",n,m,l);
    
    let arr = [];
    for(let j = 0;j<n;j++)
    {
        let temp  = input[l++].trim().split(" ").map(Number);
      //  console.log()
        arr.push(temp);
    }
    traversal(n,m,arr)
}
    
}

if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
3 4
1 10 9 8
2 11 12 7 
3 4 5 6
4 3
1 10 9
2 11 8
3 12 7 
4 5 6
4 4
1 12 11 10
2 13 16 9
3 14 15 8
4 5 6 7`);
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