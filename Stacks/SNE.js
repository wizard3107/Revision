const top = (arr) => {
    return arr[arr.length - 1];
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let n = input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);

    let stack = [];
    let ans = []
    for (let i = 0; i < n; i++) {
        //console.log(stack)
        while(stack.length !== 0 && stack[stack.length-1]>= arr[i]){
            stack.pop()
        }
        if(stack.length === 0){
            ans.push(-1)
        }
        else{
            ans.push(stack[stack.length-1])
        }
        stack.push(arr[i])
        //console.log(stack)

    }
    console.log(ans.join(" "));
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`8
39 27 11 4 24 32 32 1`);
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