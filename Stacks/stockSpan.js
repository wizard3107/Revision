const stockSpan = (arr, n) => {
    let stack = [];
    let ans = [];

  for(let i =0;i<n;i++)
  {
      let count = 1
      while(stack.length>0&&arr[i]>=arr[stack[stack.length-1]])
      {
        count +=ans[stack[stack.length-1]]
        stack.pop(); 
      }
      ans[i]=count;
      stack.push(i);
  }
  return ans.join(" ");
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0].trim()
    let l = 1;
    for (let i = 0; i < t; i++) {
         let n = +input[l++].trim();
        let arr = input[l++].trim().split(" ").map(Number);
        console.log(stockSpan(arr,n))
        

    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`1
6
100 60 70 65 80 85
`)
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