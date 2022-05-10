const followTheKnight = (i, j, n, board) => {
    
    if (i < 0 || j < 0 || i > 9 || j > 9) {
        return
    }
    if (n === 0) {
        board[i][j] = 1
        return
    }

    followTheKnight(i + 2, j + 1, n - 1, board)
    followTheKnight(i + 2, j - 1, n - 1, board)
    followTheKnight(i - 2, j + 1, n - 1, board)
    followTheKnight(i - 2, j - 1, n - 1, board)
    followTheKnight(i + 1, j + 2, n - 1, board)
    followTheKnight(i - 1, j + 2, n - 1, board)
    followTheKnight(i + 1, j - 2, n - 1, board)
    followTheKnight(i - 1, j - 2, n - 1, board)
    return board
}

function runProgram(input) {
    // Write code here
    input = input.trim().split(' ').map(Number)
    let [a, b, n] = input;
    let board = []
    for (let i = 0; i < 10; i++) {
            let temp = []
        for (let j = 0; j < 10; j++) {
            temp.push( 0)
        }
        board.push(temp)
    }
    let count=0;
    console.log(board.join("\n"));
    board = followTheKnight(a - 1, b - 1, n, board)
    console.log(board.join("\n"));

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
           if( board[i][j] ===1)
           count++;
        }
    }
        console.log(count);
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`4 7 6`);
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

/*  */