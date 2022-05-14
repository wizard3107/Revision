function pge(arr, n) {
    let stack = [];
    let ans = [];
    for (let i = 0; i < n; i++) {
        //console.log(stack);
        while (stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            // console.log(stack);
            stack.pop();
        }
        if (stack.length === 0) {
            ans.push(-1);
        }
        else
            ans.push(stack[stack.length - 1] + 1)

        stack.push(i)
    }
    return ans

}
function nge(arr, n) {
    let stack = [];
    let ans = [];
    for (let i = n - 1; i >= 0; i--) {
        //console.log(stack);
        while (stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            // console.log(stack);
            stack.pop();
        }
        if (stack.length === 0) {
            ans.push(-1);
        }
        else
            ans.push(stack[stack.length - 1] + 1)

        stack.push(i)
    }
    return ans.reverse()
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(" ").map(Number);
    let s = pge(arr, n)
    let g = nge(arr, n)
    let res = []
    console.log(s, g)
    for (let i = 0; i < n; i++) {
        res.push(s[i] + g[i]);
    }
    console.log(res.join(" "));
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`5
1 1 1 1 1`);
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