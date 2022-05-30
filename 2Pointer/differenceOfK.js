const difference = (arr,k,n)=>{
    let  l =0,h=1;
    while(l<n&&h<n)
    {
      if(l===h)
      {
        h++;
      }
      else
      {

        let diff = arr[h]-arr[l];
        //console.log(diff,"diff",l,h,"l,h")
        if(diff===k){
          return "Yes";
        }
        else if (diff>k)
        {
          l++;
        }
        else
        {
          h++;
        }
      }
    }
    return "No"

}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let t = +input[0].trim()
let l =1;
for(let i =0 ; i<t;i++)
{
    let  [n,k] =input[l++].trim().split(" ").map(Number);
    let arr = input[l++].trim().split(" ").map(Number);
    console.log(difference(arr,k,n)) 
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5
1 5
3
6 0
-8 -7 5 6 6 9
1 4
-3
2 6
-2 1
3 3
-5 -3 0`);
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