function seperationOfOddEven(N, arr, Q) {
    //write code here
    arr.sort(function (a, b) {
        return a - b;
    })
    let even = []
    let odd = []
    for (let i = 0; i < N; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }
        else {
            odd.push(arr[i])
        }
    }
    if (Q === 1) {
        console.log(even.join(" "), odd.join(" "))
    }
    else {
        console.log(odd.join(" "), even.join(" "))
    }
}
function runProgram(input) {
  // Write code here
input=input.trim().split('')
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
6
1 3 5 2 7 4
1
6 
1 3 5 2 7 4
2`);
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