function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0].trim();
    let arr = input[1].trim().split(' ').map(Number);
    let res = []
    const permutation = (arr, cur) => {
        var temp = []
        if (cur === arr.length) {
            for (let j = 0; j < n; j++) {
                temp.push(arr[j])
            }
            res.push(temp)
            return
        }
        for (let i = cur; i < n; i++) {
            let c = arr[i];
            arr[i] = arr[cur];
            arr[cur] = c;
            permutation(arr, cur + 1)
            c = arr[i];
            arr[i] = arr[cur];
            arr[cur] = c;
        }
        return
    }

    permutation(arr, 0)
    res.sort();
    for(let i=0;i<res.length;i++)
    {
        console.log(res[i].join(' '));
    }
}

if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
1 2 3`);
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