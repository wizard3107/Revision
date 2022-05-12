const minimum = (n,arr,l,h)=>{
    let mid
    while(l<=h){
         mid= l+Math.floor((h-l)/2)
        if(arr[mid]>arr[h])
        {
            l = mid+1
        }
        else if(arr[mid]<arr[h])
        {
            h=mid
        }
        else
            h--;
    }
    return arr[mid];
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n');
let n = input[0].trim()
let arr = input[1].trim().split(" ").map(Number);

console.log(minimum(n,arr,0,n-1))

}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`10
5 6 7 9 10 11 20 21 2 3`);
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