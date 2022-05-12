const bracket = (str) => {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
        }
        else {
            if (str[i] === ")") {
                if (stack[stack.length - 1] === '(')
                    stack.pop();
                else
                    return "not balanced";
            }
            else if (str[i] === "}") {
                if (stack[stack.length - 1] === '{')
                    stack.pop();
                else
                    return "not balanced";
            }

            else if (str[i] === "]") {
                if (stack[stack.length - 1] === '[')
                    stack.pop();
                else
                    return "not balanced";
            }
        }
    }
    if (stack.length !== 0)
        return "not balanced";
    else
        return "balanced";
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0].trim()
    for (let i = 1; i <= t; i++) {
        let str = input[i].trim().split("");
        console.log(bracket(str));
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
{([])}
()
([]
`);
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